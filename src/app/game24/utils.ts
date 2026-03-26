export const GamePhase = { WAITING: 'WAITING', DEALING: 'DEALING', REACTION: 'REACTION', ANSWERING: 'ANSWERING', RESOLVING: 'RESOLVING', GAME_OVER: 'GAME_OVER' };
export const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
export const SUITS = [{ symbol: '♠', color: 'black' }, { symbol: '♥', color: 'red' }, { symbol: '♦', color: 'red' }, { symbol: '♣', color: 'black' }];

export class GameState {
    players: any[] = []; deck: any[] = []; table: any[] = [];
    phase = GamePhase.WAITING;
    currentRound = 0;
    askerId: string | null = null;
    answererId: string | null = null;
    reactionStartTime = 0;
    targetScore = 24;

    createDeck() {
        let deck: any[] = [];
        SUITS.forEach(s => RANKS.forEach(r => deck.push({ suit: s, rank: r })));
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }
}

export class GameManager {
    state = new GameState();
    addPlayer(id: string, name: string, colorClass: string) {
        this.state.players.push({ id, name, colorClass, hand: [], isReady: false, reactionTime: null });
    }
    startGame() {
        this.state.deck = this.state.createDeck();
        this.state.table = this.state.deck.splice(0, 4);

        let currentPlayerIndex = 0;
        while (this.state.deck.length > 0) {
            this.state.players[currentPlayerIndex].hand.push(this.state.deck.pop());
            currentPlayerIndex = (currentPlayerIndex + 1) % this.state.players.length;
        }
        this.startNewRound(true);
    }
    startNewRound(isFirstRound = false) {
        this.state.currentRound++;
        this.state.askerId = null;
        this.state.answererId = null;
        this.state.players.forEach(p => { p.isReady = false; p.reactionTime = null; });

        if (!isFirstRound) this._autoPlayCardsForRound();

        this.state.phase = GamePhase.REACTION;
        this.state.reactionStartTime = Date.now();
    }
    _autoPlayCardsForRound() {
        const pCount = this.state.players.length;
        if (pCount === 2) {
            this.state.players.forEach(p => this.state.table.push(...p.hand.splice(0, 2)));
        } else if (pCount === 3) {
            const twoCardIndex = this.state.currentRound % 3;
            this.state.players.forEach((p, idx) => {
                let count = (idx === twoCardIndex) ? 2 : 1;
                this.state.table.push(...p.hand.splice(0, Math.min(count, p.hand.length)));
            });
        } else if (pCount >= 4) {
            this.state.players.forEach(p => {
                this.state.table.push(...p.hand.splice(0, 1));
            });
        }
    }
    playerReady(id: string, timeDelta: number) {
        let p = this.state.players.find(x => x.id === id);
        if (p && !p.isReady) {
            p.isReady = true;
            p.reactionTime = timeDelta;
        }
        if (this.state.players.every(x => x.isReady)) {
            let slowest = [...this.state.players].sort((a, b) => b.reactionTime - a.reactionTime)[0];
            this.state.askerId = slowest.id;
            this.state.phase = GamePhase.ANSWERING;
        }
    }
}

export function getCardValues(rank: string) {
    if (rank === 'A') return [1, 11];
    if (['J', 'Q', 'K'].includes(rank)) return [10];
    return [parseInt(rank)];
}

export function getAllValidSets(ranks: string[]) {
    let sets: number[][] = [[]];
    for (const rank of ranks) {
        const possibleValues = getCardValues(rank);
        const newSets: number[][] = [];
        for (const set of sets) {
            for (const val of possibleValues) {
                newSets.push([...set, val].sort((a, b) => a - b));
            }
        }
        sets = newSets;
    }
    return sets;
}

export function canMakeTarget(arr: any[], target: number): string[] {
    if (arr.length === 1) {
        if (Math.abs(arr[0].val - target) < 0.0001) return [arr[0].expr];
        return [];
    }
    let answers: string[] = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                let nextArr = [];
                for (let k = 0; k < arr.length; k++) {
                    if (k !== i && k !== j) nextArr.push(arr[k]);
                }
                let aObj = arr[i];
                let bObj = arr[j];
                nextArr.push({ val: aObj.val + bObj.val, expr: `(${aObj.expr} + ${bObj.expr})` });
                answers.push(...canMakeTarget(nextArr, target));
                nextArr.pop();
                nextArr.push({ val: aObj.val - bObj.val, expr: `(${aObj.expr} - ${bObj.expr})` });
                answers.push(...canMakeTarget(nextArr, target));
                nextArr.pop();
                nextArr.push({ val: aObj.val * bObj.val, expr: `(${aObj.expr} * ${bObj.expr})` });
                answers.push(...canMakeTarget(nextArr, target));
                nextArr.pop();
                if (bObj.val !== 0 && aObj.val % bObj.val === 0) {
                    nextArr.push({ val: aObj.val / bObj.val, expr: `(${aObj.expr} / ${bObj.expr})` });
                    answers.push(...canMakeTarget(nextArr, target));
                    nextArr.pop();
                }
            }
        }
    }
    return answers;
}

export function checkTargetSolutionAvailable(ranks: string[], target: number) {
    const validSets = getAllValidSets(ranks);
    const allSolutions = new Set<string>();
    for (const set of validSets) {
        const objSet = set.map(num => ({ val: num, expr: num.toString() }));
        const results = canMakeTarget(objSet, target);
        results.forEach(res => allSolutions.add(res));
    }
    return Array.from(allSolutions);
}
