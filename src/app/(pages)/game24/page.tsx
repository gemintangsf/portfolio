"use client";

import { useState, useEffect, useRef } from 'react';
import './game24.css';

import { GamePhase, GameManager, checkTargetSolutionAvailable } from './utils';

export default function Game24Page() {
    const gameRef = useRef<GameManager | null>(null);
    const [renderTrigger, setRenderTrigger] = useState(0);
    const updateUI = () => setRenderTrigger(prev => prev + 1);

    const [targetScoreInput, setTargetScoreInput] = useState(24);
    const [playerCountInput, setPlayerCountInput] = useState(2);

    const [statusText, setStatusText] = useState("Tahap: Menunggu...");
    const [selectedTargetId, setSelectedTargetId] = useState<string | null>(null);

    const [snackbar, setSnackbar] = useState({ show: false, text: '', type: 'info' });
    const snackbarTimeoutRef = useRef<any>(null);

    const [lastRoundSolutions, setLastRoundSolutions] = useState<string[]>([]);

    const [hintModal, setHintModal] = useState({ show: false, html: '' });

    const [timeLeft, setTimeLeft] = useState(60);
    const timerIntervalRef = useRef<any>(null);

    // Merging System State
    const [activeItems, setActiveItems] = useState<any[]>([]);
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
    const [pendingOp, setPendingOp] = useState<string | null>(null);

    const [aceChoiceModal, setAceChoiceModal] = useState<{ show: boolean, itemIndex: number } | null>(null);
    const [isZoomMode, setIsZoomMode] = useState(false);

    const game = gameRef.current;

    const showMessage = (text: string, type = 'info') => {
        setSnackbar({ show: true, text, type });
        clearTimeout(snackbarTimeoutRef.current);
        snackbarTimeoutRef.current = setTimeout(() => {
            setSnackbar(prev => ({ ...prev, show: false }));
        }, 3500);
    };

    const initGame = () => {
        const newGame = new GameManager();
        newGame.addPlayer('p1', 'Player 1', 'p1-btn');
        newGame.addPlayer('p2', 'Player 2', 'p2-btn');
        if (playerCountInput >= 3) newGame.addPlayer('p3', 'Player 3', 'p3-btn');
        if (playerCountInput >= 4) newGame.addPlayer('p4', 'Player 4', 'p4-btn');

        newGame.state.targetScore = targetScoreInput;
        newGame.startGame();
        gameRef.current = newGame;
        setHintModal({ show: false, html: '' });
        updateUI();
    };

    const triggerReaction = (playerId: string) => {
        if (!gameRef.current) return;
        const timeDelta = Date.now() - gameRef.current.state.reactionStartTime;
        gameRef.current.playerReady(playerId, timeDelta);
        updateUI();
    };

    // Keyboard bindings for React
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (gameRef.current && gameRef.current.state.phase === GamePhase.REACTION) {
                const pCount = gameRef.current.state.players.length;
                if (e.key.toLowerCase() === 'q') triggerReaction('p1');
                if (e.key.toLowerCase() === 'p') triggerReaction('p2');
                if (e.key === ' ' && pCount > 2) {
                    e.preventDefault();
                    triggerReaction('p3');
                }
                if (e.key === 'Enter' && pCount > 3) triggerReaction('p4');
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [renderTrigger]);

    const startAnswerTimer = () => {
        setTimeLeft(60);
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timerIntervalRef.current);
                    setTimeout(() => evaluateAnswer(true), 0);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    useEffect(() => {
        return () => clearInterval(timerIntervalRef.current);
    }, []);

    const surrenderRound = () => {
        if (game && game.state.phase === GamePhase.REACTION) {
            const currentTableCardsRanks = game.state.table.slice(-4).map(c => c.rank);
            const targetScore = game.state.targetScore;
            const solutions = checkTargetSolutionAvailable(currentTableCardsRanks, targetScore);

            if (solutions.length > 0) {
                const displayList = solutions.slice(0, 3).map(s => `<li>${s}</li>`).join('');
                const moreText = solutions.length > 3 ? `<p><em>...dan ${solutions.length - 3} kemungkinan lainnya</em></p>` : '';

                setHintModal({ show: false, html: `<ul>${displayList}</ul>${moreText}` });
                showMessage(`MASIH ADA SETIDAKNYA ${solutions.length} KEMUNGKINAN SOLUSI! Jangan nyerah dulu.`, "error");
                return;
            }

            const impossibleCards = game.state.table.splice(-4);
            let pIdx = 0;
            while (impossibleCards.length > 0) {
                game.state.players[pIdx].hand.push(impossibleCards.pop());
                pIdx = (pIdx + 1) % game.state.players.length;
            }

            let totalCardsAvailable = game.state.players.reduce((sum, p) => sum + p.hand.length, 0);
            if (totalCardsAvailable >= 4) {
                game._autoPlayCardsForRound();
                setStatusText("Kartu diganti baru karena memang tidak ada solusi!");
                showMessage(`Kartu di meja telah diganti karena tidak bisa menjadi ${targetScore}.`, "success");
                game.state.players.forEach(p => { p.isReady = false; p.reactionTime = null; });
                game.state.reactionStartTime = Date.now();
                setHintModal({ show: false, html: '' });
                updateUI();
            } else {
                showMessage("Pemain tidak memiliki cukup kartu untuk ganti!", "error");
            }
        }
    };

    const handleAnswering = (finalValue?: number) => {
        if (!game || game.state.phase !== GamePhase.ANSWERING) return;
        if (!game.state.answererId) {
            if (!selectedTargetId) {
                showMessage("Pilih target terlebih dahulu!", 'error');
                return;
            }
            game.state.answererId = selectedTargetId;
            resetCalculation();
            startAnswerTimer();
            updateUI();
        } else {
            evaluateAnswer(false, finalValue);
        }
    };

    const resetCalculation = () => {
        if (!game) return;
        const initialCards = game.state.table.slice(-4).map((c, idx) => ({
            type: 'card',
            value: null, // to be determined for A, others set now
            rank: c.rank,
            suit: c.suit,
            label: c.rank,
            expr: c.rank,
            id: `card-${idx}`
        }));
        setActiveItems(initialCards);
        setSelectedItemIndex(null);
        setPendingOp(null);
        setAceChoiceModal(null);
    };

    const handleItemClick = (index: number, aceValue?: number) => {
        if (!game || game.state.phase !== GamePhase.ANSWERING || !game.state.answererId) return;

        const item = activeItems[index];

        // Handle first selection
        if (selectedItemIndex === null) {
            if (item.rank === 'A' && item.value === null && aceValue === undefined) {
                setAceChoiceModal({ show: true, itemIndex: index });
                return;
            }
            if (item.rank === 'A' && aceValue !== undefined) {
                const newItems = [...activeItems];
                newItems[index] = { ...item, value: aceValue, expr: aceValue.toString() };
                setActiveItems(newItems);
            }
            setSelectedItemIndex(index);
            setAceChoiceModal(null);
            return;
        }

        // Handle second selection (merging)
        if (selectedItemIndex === index) {
            setSelectedItemIndex(null); // Deselect
            setPendingOp(null);
            return;
        }

        if (!pendingOp) {
            setSelectedItemIndex(index); // Switch first selection
            return;
        }

        // We have selectedItemIndex, pendingOp, and now a second item
        const itemA = activeItems[selectedItemIndex];
        const itemB = activeItems[index];

        // Helper to get effective value
        const getVal = (it: any) => it.value !== null ? it.value : (['J', 'Q', 'K'].includes(it.rank) ? 10 : parseInt(it.rank));

        // Handle Ace B if needed
        if (itemB.rank === 'A' && itemB.value === null && aceValue === undefined) {
            setAceChoiceModal({ show: true, itemIndex: index });
            return;
        }

        const valA = getVal(itemA);
        const valB = aceValue !== undefined ? aceValue : getVal(itemB);
        let result = 0;

        if (pendingOp === '+') result = valA + valB;
        else if (pendingOp === '-') result = valA - valB;
        else if (pendingOp === '*') result = valA * valB;
        else if (pendingOp === '/') {
            if (valB === 0) { showMessage("Divide by zero!", "error"); return; }
            result = valA / valB;
        }

        const newResultItem = {
            type: 'result',
            value: result,
            expr: `(${itemA.expr} ${pendingOp} ${aceValue !== undefined ? aceValue : itemB.expr})`,
            label: result.toString(),
            id: `res-${Date.now()}`
        };

        const nextItems = activeItems.filter((_, i) => i !== index && i !== selectedItemIndex);
        nextItems.push(newResultItem);

        setActiveItems(nextItems);
        setSelectedItemIndex(null);
        setPendingOp(null);
        setAceChoiceModal(null);

        // Check for win condition
        if (nextItems.length === 1) {
            setTimeout(() => handleAnswering(nextItems[0].value), 500);
        }
    };

    const handleOperatorClick = (op: string) => {
        if (selectedItemIndex === null) {
            showMessage("Pilih kartu/item pertama dulu!", "info");
            return;
        }
        setPendingOp(op);
    };

    const evaluateAnswer = (isTimeout = false, finalValue?: number) => {
        if (!gameRef.current) return;
        const gm = gameRef.current;
        clearInterval(timerIntervalRef.current);

        if (isTimeout) {
            const answerer = gm.state.players.find(p => p.id === gm.state.answererId);
            const tableCardCount = gm.state.table.length;

            const currentTableCardsRanks = gm.state.table.slice(-4).map(c => c.rank);
            const targetScore = gm.state.targetScore;
            setLastRoundSolutions(checkTargetSolutionAvailable(currentTableCardsRanks, targetScore));

            showMessage(`⏱ Waktu habis! <br><strong>${answerer?.name || "Pemain"}</strong> menerima penalty mengambil ${tableCardCount} kartu di meja!`, 'error');
            if (answerer) answerer.hand.push(...gm.state.table.splice(0, tableCardCount));
            gm.state.phase = GamePhase.RESOLVING;
            if (gm.state.players.some(p => p.hand.length === 0)) gm.state.phase = GamePhase.GAME_OVER;
            updateUI();
            return;
        }

        // Use finalValue from Visual Builder instead of parsing text input
        let isCorrect = false;
        if (finalValue !== undefined) {
            if (Math.abs(finalValue - gm.state.targetScore) < 0.0001) isCorrect = true;
        }

        const currentTableCardsRanks = gm.state.table.slice(-4).map(c => c.rank);
        const targetScore = gm.state.targetScore;
        setLastRoundSolutions(checkTargetSolutionAvailable(currentTableCardsRanks, targetScore));

        gm.state.phase = GamePhase.RESOLVING;
        const asker = gm.state.players.find(p => p.id === gm.state.askerId);
        const answerer = gm.state.players.find(p => p.id === gm.state.answererId);
        const tableCardCount = gm.state.table.length;

        if (isCorrect) {
            showMessage(`✅ Benar! <strong>${answerer?.name || "Pemain"}</strong> selamat. <br><strong>${asker?.name || "Pemain"} (Asker)</strong> menerima penalty mengambil ${tableCardCount} kartu di meja!`, 'success');
            if (asker) asker.hand.push(...gm.state.table.splice(0, tableCardCount));
        } else {
            showMessage(`❌ Salah/Gagal! <strong>${answerer?.name || "Pemain"}</strong> menerima penalty mengambil ${tableCardCount} kartu di meja!`, 'error');
            if (answerer) answerer.hand.push(...gm.state.table.splice(0, tableCardCount));
        }

        resetCalculation(); // Clear builder for next time
        if (gm.state.players.some(p => p.hand.length === 0)) gm.state.phase = GamePhase.GAME_OVER;
        updateUI();
    };

    const nextRoundTrigger = () => {
        if (game && game.state.phase === GamePhase.RESOLVING) {
            setSelectedTargetId(null);
            setHintModal({ show: false, html: '' });
            game.startNewRound();
            updateUI();
        }
    };

    let showSetup = !game;
    let showPlayers = !!game;
    let showTable = !!game;

    let isReactionPhase = game?.state.phase === GamePhase.REACTION;
    let isAnsweringPhase = game?.state.phase === GamePhase.ANSWERING;
    let isResolvingPhase = game?.state.phase === GamePhase.RESOLVING;
    let isGameOver = game?.state.phase === GamePhase.GAME_OVER;

    let currentStatusText = statusText;
    if (isReactionPhase) currentStatusText = "Tahap Reaksi: Adu Cepat Tekan Tombol!";
    else if (isAnsweringPhase) currentStatusText = "Tahap Hukuman: Pemain Terlambat Memilih Target!";
    else if (isGameOver) currentStatusText = "GAME OVER!";
    else if (isResolvingPhase) currentStatusText = "Tahap Penyelesaian";

    return (
        <div className="game-wrapper min-h-screen flex items-center justify-center pt-28 pb-12 px-4 z-10 relative">
            <div className="game-container">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-brand-base to-brand-accent bg-clip-text text-transparent mb-2">
                    Game <span id="title-score">{game ? game.state.targetScore : targetScoreInput}</span>: Multiplayer
                </h1>
                <p className="text-brand-base/70 mb-8 font-medium text-lg">
                    Adu cepat tekan tombol & hitung <span id="subtitle-score" className="text-brand-primary">{game ? game.state.targetScore : targetScoreInput}</span>!
                </p>

                {game && (
                    <div className="status-bar rounded-xl px-5 py-3 mb-6 font-bold shadow-sm bg-brand-base/5 text-brand-primary border border-brand-primary/20">
                        {currentStatusText}
                    </div>
                )}

                {showSetup && (
                    <div className="flex flex-col gap-4 text-left">
                        <label className="font-bold text-brand-base text-base pl-1">Pilih Target Skor (Misal: 20, 24, 27):</label>
                        <input type="number" value={targetScoreInput} onChange={e => setTargetScoreInput(parseInt(e.target.value) || 24)} min="1" max="100" />

                        <label className="font-bold text-brand-base text-base pl-1 mt-3">Pilih Jumlah Pemain (Local Hotseat):</label>
                        <select value={playerCountInput} onChange={e => setPlayerCountInput(parseInt(e.target.value))}>
                            <option value="2">2 Pemain</option>
                            <option value="3">3 Pemain</option>
                            <option value="4">4 Pemain</option>
                        </select>
                        <button type="button" className="standard mt-4" onClick={initGame}>Mulai Game</button>
                    </div>
                )}

                {showPlayers && game && (
                    <div className="flex justify-around flex-wrap mb-6 gap-3">
                        {game.state.players.map(p => (
                            <div key={p.id} className={`player-card ${game.state.askerId === p.id ? 'slowest' : ''} ${game.state.answererId === p.id ? 'active' : ''}`}>
                                <div className="font-bold text-lg mb-1 text-brand-base">{p.name}</div>
                                <div className="text-3xl font-bold text-brand-primary leading-tight">{p.hand.length}</div>
                                <div className="text-xs text-brand-base/70 mt-1 min-h-[15px] font-medium">
                                    {p.reactionTime ? (p.reactionTime / 1000).toFixed(2) + 's' : ''}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {showTable && game && (
                    <div className="mb-6 p-5 rounded-2xl bg-brand-base/5 border border-brand-primary/10 shadow-inner relative">
                        <div className="text-lg font-bold mb-4 text-brand-base flex justify-between items-center">
                            <span>{isAnsweringPhase && game.state.answererId ? 'Gabungkan Kartu / Hasil:' : `Kartu di Meja (${game.state.table.length})`}</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setIsZoomMode(true)}
                                    className="p-2 bg-brand-base/10 text-brand-base rounded-lg hover:bg-brand-primary hover:text-brand-on-surface transition-all shadow-sm"
                                    title="Zoom Kartu"
                                >
                                    🔍
                                </button>
                                {isAnsweringPhase && game.state.answererId && (
                                    <button onClick={resetCalculation} className="text-xs uppercase tracking-widest bg-rose-500 text-white px-3 py-1 rounded-full hover:bg-rose-600 transition-colors">
                                        Reset
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 flex-wrap min-h-[130px]">
                            {(isAnsweringPhase && game.state.answererId ? activeItems : game.state.table.slice(-4)).map((item: any, i: number) => {
                                // If it's the original card view (reaction/resolving phase)
                                if (!isAnsweringPhase || !game.state.answererId) {
                                    return (
                                        <div key={i} className={`playing-card ${item.suit.color} new-deal`} style={{ animationDelay: `${i * 0.1}s` }}>
                                            <div className="text-base font-bold text-left leading-none">{item.rank}<br />{item.suit.symbol}</div>
                                            <div className="text-4xl text-center flex-grow flex items-center justify-center">{item.suit.symbol}</div>
                                            <div className="text-base font-bold text-right leading-none rotate-180">{item.rank}<br />{item.suit.symbol}</div>
                                        </div>
                                    );
                                }

                                // Interactive Merging Items
                                const isSelected = selectedItemIndex === i;
                                const isResult = item.type === 'result';

                                return (
                                    <div
                                        key={item.id || i}
                                        onClick={() => handleItemClick(i)}
                                        className={`
                                            ${isResult ? 'result-node' : `playing-card ${item.suit.color}`} 
                                            ${isSelected ? 'selected ring-4 ring-brand-primary ring-offset-4 ring-offset-background scale-110 z-20' : 'hover:scale-105'} 
                                            cursor-pointer transition-all active:scale-95 relative
                                        `}
                                    >
                                        {isResult ? (
                                            <div className="flex flex-col items-center justify-center h-full">
                                                <div className="text-4xl font-black text-brand-on-surface">{item.label}</div>
                                                <div className="text-[10px] opacity-60 font-medium mt-1 truncate max-w-full px-2">{item.expr}</div>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="text-base font-bold text-left leading-none">{item.rank}<br />{item.suit.symbol}</div>
                                                <div className="text-4xl text-center flex-grow flex items-center justify-center">{item.suit.symbol}</div>
                                                <div className="text-base font-bold text-right leading-none rotate-180">{item.rank}<br />{item.suit.symbol}</div>
                                            </>
                                        )}
                                        {isSelected && pendingOp && (
                                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-primary text-brand-on-surface flex items-center justify-center font-bold text-xl shadow-lg animate-bounce">
                                                {pendingOp}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                <div className="flex flex-col gap-4 mb-5">
                    {isReactionPhase && game && (
                        <div className="flex flex-col gap-4">
                            <p className="font-medium text-brand-base/80">Begitu kartu muncul, cari cara bikin <span className="font-bold text-brand-primary">{game.state.targetScore}</span>.<br />Kalau nemu atau nyerah, cepat tekan tombolmu!</p>
                            <div className="flex gap-4 justify-center flex-wrap">
                                {game.state.players.map(p => (
                                    <button type="button" key={p.id} className={`btn-react ${p.colorClass}`} disabled={p.isReady} onClick={() => triggerReaction(p.id)}>
                                        {p.name} {p.isReady ? 'Ready' : ''}
                                    </button>
                                ))}
                            </div>
                            <div className="flex gap-3 justify-center mt-2">
                                <button type="button" className="standard flex-1 !bg-rose-500 hover:!bg-rose-600" onClick={surrenderRound}>Nyerah (Tidak Ada Solusi)</button>
                                {hintModal.html && (
                                    <button type="button" className="standard flex-1" onClick={() => setHintModal(prev => ({ ...prev, show: true }))}>Lihat Hint Jawaban</button>
                                )}
                            </div>

                            <button type="button" className="text-brand-base/50 hover:text-brand-base text-sm font-bold uppercase tracking-widest mt-2 transition-colors" onClick={() => { gameRef.current = null; updateUI(); }}>
                                ← Ganti Target / Mode
                            </button>
                        </div>
                    )}

                    {isAnsweringPhase && game && (
                        <div className="flex flex-col gap-4">
                            {!game.state.answererId ? (
                                <>
                                    <div className="font-bold text-lg text-rose-500 mb-2">
                                        {game.state.players.find(p => p.id === game.state.askerId)?.name}, kamu paling lambat! Pilih target:
                                    </div>
                                    <div className="flex gap-3 justify-center mb-2">
                                        {game.state.players.filter(p => p.id !== game.state.askerId).map(p => (
                                            <button type="button" key={p.id} className={`target-btn ${selectedTargetId === p.id ? 'selected' : ''}`} onClick={() => setSelectedTargetId(p.id)}>
                                                {p.name}
                                            </button>
                                        ))}
                                    </div>
                                    <button type="button" className="standard" onClick={() => handleAnswering()}>Konfirmasi Target</button>
                                </>
                            ) : (
                                <div className="p-6 rounded-2xl bg-brand-base/5 border border-brand-primary/20 shadow-lg">
                                    <div className="font-bold text-lg text-brand-primary mb-6 flex justify-between items-center">
                                        <span>Giliran Jawaban: <span className="text-brand-base">{game.state.players.find(p => p.id === game.state.answererId)?.name}</span></span>
                                        <span className="text-2xl font-black text-brand-accent px-4 py-1 rounded-lg bg-brand-accent/10 border border-brand-accent/20">{timeLeft}s</span>
                                    </div>

                                    {/* Instruction Helper */}
                                    <div className="mb-6 py-3 px-4 rounded-xl bg-background border border-brand-primary/20 text-center">
                                        <span className="text-brand-base/70 font-medium">
                                            {selectedItemIndex === null
                                                ? "1. Klik kartu pertama yang mau digabung"
                                                : !pendingOp
                                                    ? "2. Pilih operator matematika di bawah"
                                                    : "3. Klik kartu kedua untuk liat hasilnya"}
                                        </span>
                                    </div>

                                    {/* Operator Controls */}
                                    <div className="grid grid-cols-4 gap-2 md:gap-4">
                                        {['+', '-', '*', '/'].map(op => (
                                            <button
                                                key={op}
                                                onClick={() => handleOperatorClick(op)}
                                                className={`py-6 rounded-xl text-3xl font-black transition-all ${pendingOp === op
                                                    ? 'bg-brand-primary text-brand-on-surface scale-95 shadow-inner'
                                                    : 'bg-brand-base text-brand-on-surface hover:bg-brand-accent hover:text-white shadow-md'
                                                    }`}
                                            >
                                                {op === '*' ? '×' : op === '/' ? '÷' : op}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {isResolvingPhase && (
                        <div className="flex flex-col gap-4 items-center">
                            {lastRoundSolutions.length > 0 && (
                                <div className="w-full mb-2 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                                    <div className="font-bold text-emerald-800 mb-2">Contoh Jawaban Benar:</div>
                                    <ul className="text-emerald-700 font-medium space-y-1 list-disc list-inside">
                                        {lastRoundSolutions.slice(0, 3).map((sol, idx) => (
                                            <li key={idx}>{sol}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <button type="button" className="standard w-full !bg-emerald-500 hover:!bg-emerald-600 shadow-md" onClick={nextRoundTrigger}>Lanjut Ronde Berikutnya</button>
                        </div>
                    )}

                    {isGameOver && game && (
                        <div className="flex flex-col gap-6 items-center p-8 rounded-3xl bg-brand-base/5 border-2 border-brand-accent/30 shadow-2xl animate-in fade-in zoom-in duration-500">
                            <div className="text-6xl mb-2">🏆</div>
                            <div className="text-center">
                                <div className="text-brand-base/60 uppercase tracking-[0.2em] font-bold text-sm mb-2">Sang Juara</div>
                                <div className="text-4xl font-black text-brand-accent">
                                    {game.state.players.find(p => p.hand.length === 0)?.name || "Seseorang"}
                                </div>
                            </div>
                            <p className="text-brand-base/70 text-center font-medium">
                                Selamat! Semua kartu sudah habis terjual. <br />Mau bantai lagi di ronde berikutnya?
                            </p>
                            <button type="button" className="standard w-full !bg-brand-primary !text-brand-on-surface hover:scale-105 active:scale-95 shadow-lg shadow-brand-primary/20 py-4 text-xl" onClick={initGame}>
                                Main Lagi!
                            </button>
                        </div>
                    )}
                </div>

                <div id="snackbar" className={snackbar.show ? `show ${snackbar.type}` : snackbar.type} dangerouslySetInnerHTML={{ __html: snackbar.text }}></div>
            </div>

            {hintModal.show && (
                <div className="modal-overlay show">
                    <div className="modal-content relative bg-background p-8 border-2 border-brand-primary rounded-2xl max-w-sm w-[90%] text-center shadow-2xl">
                        <div className="text-2xl font-bold mb-4 text-brand-accent">Hint Jawaban</div>
                        <div className="modal-body max-h-[250px] overflow-y-auto" dangerouslySetInnerHTML={{ __html: hintModal.html }}></div>
                        <button type="button" className="standard mt-6 w-full" onClick={() => setHintModal(prev => ({ ...prev, show: false }))}>Tutup</button>
                    </div>
                </div>
            )}

            {aceChoiceModal?.show && (
                <div className="modal-overlay show !z-[3000]">
                    <div className="modal-content relative bg-background p-8 border-2 border-brand-primary rounded-2xl max-w-sm w-[90%] text-center shadow-2xl">
                        <div className="text-2xl font-bold mb-6 text-brand-accent">Pilih Nilai AS</div>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => handleItemClick(aceChoiceModal.itemIndex, 1)}
                                className="standard !text-3xl py-6"
                            >
                                1
                            </button>
                            <button
                                onClick={() => handleItemClick(aceChoiceModal.itemIndex, 11)}
                                className="standard !text-3xl py-6"
                            >
                                11
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isZoomMode && game && (
                <div className="modal-overlay show !z-[4000] backdrop-blur-md !bg-black/70 flex items-center justify-center" onClick={() => setIsZoomMode(false)}>
                    
                    {/* MOBILE VIEW (Landscape canvas rotated -90deg) */}
                    <div className="md:hidden w-[100vh] h-[100vw] -rotate-90 flex flex-col items-center justify-center gap-6" onClick={e => e.stopPropagation()}>
                        <div className="text-white font-black text-xl sm:text-2xl uppercase tracking-[0.4em] drop-shadow-lg text-center">
                            Zoom Kartu
                        </div>
                        
                        {/* 4 Cards in a neat horizontal line for the rotated landscape canvas */}
                        <div className="flex gap-3 sm:gap-5 justify-center w-full px-2">
                            {game.state.table.slice(-4).map((c: any, i: number) => (
                                <div 
                                    key={i} 
                                    className={`playing-card ${c.suit.color} shrink-0 !w-[110px] sm:!w-[130px] !h-[160px] sm:!h-[180px] shadow-2xl border-2 border-white/30 bg-zinc-900 rounded-[1rem] flex flex-col p-3`} 
                                >
                                    <div className="text-base sm:text-lg font-black text-left leading-none">{c.rank}<br />{c.suit.symbol}</div>
                                    <div className="text-5xl sm:text-6xl text-center flex-grow flex items-center justify-center drop-shadow-md">{c.suit.symbol}</div>
                                    <div className="text-base sm:text-lg font-black text-right leading-none rotate-180">{c.rank}<br />{c.suit.symbol}</div>
                                </div>
                            ))}
                        </div>
                        
                        <button className="standard px-10 !py-3 !text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] !bg-white !text-black font-black rounded-full active:scale-95 transition-transform" onClick={() => setIsZoomMode(false)}>
                            Tutup Zoom
                        </button>
                    </div>

                    {/* WEB VIEW (Portrait, standard 2x2 grid) */}
                    <div className="hidden md:flex flex-col items-center justify-center gap-12 w-full max-w-4xl p-8" onClick={e => e.stopPropagation()}>
                        <div className="text-white font-black text-4xl uppercase tracking-[0.4em] drop-shadow-lg text-center">
                            Zoom Kartu
                        </div>
                        
                        <div className="grid grid-cols-2 gap-x-16 gap-y-12 place-items-center">
                            {game.state.table.slice(-4).map((c: any, i: number) => (
                                <div 
                                    key={i} 
                                    className={`playing-card ${c.suit.color} !w-[200px] !h-[280px] shadow-2xl border-4 border-white/30 bg-zinc-900 rounded-[1.5rem] flex flex-col p-5`} 
                                >
                                    <div className="text-2xl font-black text-left leading-none">{c.rank}<br />{c.suit.symbol}</div>
                                    <div className="text-8xl text-center flex-grow flex items-center justify-center drop-shadow-md">{c.suit.symbol}</div>
                                    <div className="text-2xl font-black text-right leading-none rotate-180">{c.rank}<br />{c.suit.symbol}</div>
                                </div>
                            ))}
                        </div>
                        
                        <button className="standard w-[300px] !py-4 !text-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] !bg-white !text-black font-black rounded-full hover:scale-105 active:scale-95 transition-transform" onClick={() => setIsZoomMode(false)}>
                            Tutup Zoom
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
}
