"use client";

import React, { useState, useEffect, useRef } from 'react';
import './game24.css';

import { GamePhase, GameManager, checkTargetSolutionAvailable, getAllValidSets } from './utils';

export default function Game24Page() {
    const gameRef = useRef<GameManager | null>(null);
    const [renderTrigger, setRenderTrigger] = useState(0);
    const updateUI = () => setRenderTrigger(prev => prev + 1);

    const [targetScoreInput, setTargetScoreInput] = useState(24);
    const [playerCountInput, setPlayerCountInput] = useState(2);
    
    const [statusText, setStatusText] = useState("Tahap: Menunggu...");
    const [selectedTargetId, setSelectedTargetId] = useState<string | null>(null);
    const [exprInput, setExprInput] = useState("");
    
    const [snackbar, setSnackbar] = useState({ show: false, text: '', type: 'info' });
    const snackbarTimeoutRef = useRef<any>(null);

    const [lastRoundSolutions, setLastRoundSolutions] = useState<string[]>([]);

    const [hintModal, setHintModal] = useState({ show: false, html: '' });
    
    const [timeLeft, setTimeLeft] = useState(60);
    const timerIntervalRef = useRef<any>(null);

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
            while(impossibleCards.length > 0) {
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

    const handleAnswering = () => {
        if (!game || game.state.phase !== GamePhase.ANSWERING) return;
        if (!game.state.answererId) {
            if (!selectedTargetId) {
                showMessage("Pilih target terlebih dahulu!", 'error');
                return;
            }
            game.state.answererId = selectedTargetId;
            startAnswerTimer();
            updateUI();
        } else {
            evaluateAnswer();
        }
    };

    const evaluateAnswer = (isTimeout = false) => {
        if (!gameRef.current) return;
        const gm = gameRef.current;
        clearInterval(timerIntervalRef.current);

        if (isTimeout) {
            const answerer = gm.state.players.find(p => p.id === gm.state.answererId);
            const tableCardCount = gm.state.table.length;
            
            const currentTableCardsRanks = gm.state.table.slice(-4).map(c => c.rank);
            const targetScore = gm.state.targetScore;
            setLastRoundSolutions(checkTargetSolutionAvailable(currentTableCardsRanks, targetScore));

            showMessage(`⏱ Waktu habis! <br><strong>${answerer.name}</strong> menerima penalty mengambil ${tableCardCount} kartu di meja!`, 'error');
            answerer.hand.push(...gm.state.table.splice(0, tableCardCount));
            gm.state.phase = GamePhase.RESOLVING;
            if (gm.state.players.some(p => p.hand.length === 0)) gm.state.phase = GamePhase.GAME_OVER;
            updateUI();
            return;
        }

        const input = exprInput.trim();
        if (!/^[0-9+\-*/()\. \t]+$/.test(input)) {
            showMessage("Karakter tidak valid! Hanya angka dan operator.", 'error'); return;
        }

        const inputNumbersMatches = input.match(/\d+/g);
        if (!inputNumbersMatches || inputNumbersMatches.length !== 4) {
            showMessage("Wajib menggunakan tepat 4 angka!", 'error'); return;
        }

        const inputNumbers = inputNumbersMatches.map(Number).sort((a, b) => a - b);
        const currentTableCardsRanks = gm.state.table.slice(-4).map(c => c.rank);
        const validSets = getAllValidSets(currentTableCardsRanks);

        let isValidMatch = false;
        for (const validSet of validSets) {
            if (validSet.every((val, index) => val === inputNumbers[index])) {
                isValidMatch = true; break;
            }
        }

        if (!isValidMatch) {
            showMessage("Angka yang dimasukkan tidak cocok dengan 4 kartu di meja!", 'error');
            return; 
        }

        let isCorrect = false;
        try {
            // eslint-disable-next-line
            const result = new Function('return ' + input)();
            if (Math.abs(result - gm.state.targetScore) < 0.0001) isCorrect = true;
        } catch (e) {
            showMessage("Format persamaan matematika tidak bisa dihitung!", 'error');
            return;
        }

        const targetScore = gm.state.targetScore;
        setLastRoundSolutions(checkTargetSolutionAvailable(currentTableCardsRanks, targetScore));

        gm.state.phase = GamePhase.RESOLVING;
        const asker = gm.state.players.find(p => p.id === gm.state.askerId);
        const answerer = gm.state.players.find(p => p.id === gm.state.answererId);
        const tableCardCount = gm.state.table.length;

        if (isCorrect) {
            showMessage(`✅ Benar! <strong>${answerer.name}</strong> selamat. <br><strong>${asker.name} (Asker)</strong> menerima penalty mengambil ${tableCardCount} kartu di meja!`, 'success');
            asker.hand.push(...gm.state.table.splice(0, tableCardCount));
        } else {
            showMessage(`❌ Salah/Gagal! <strong>${answerer.name}</strong> menerima penalty mengambil ${tableCardCount} kartu di meja!`, 'error');
            answerer.hand.push(...gm.state.table.splice(0, tableCardCount));
        }

        if (gm.state.players.some(p => p.hand.length === 0)) gm.state.phase = GamePhase.GAME_OVER;
        updateUI();
    };

    const nextRoundTrigger = () => {
        if (game && game.state.phase === GamePhase.RESOLVING) {
            setExprInput("");
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
                    <div className="status-bar rounded-xl px-5 py-3 mb-6 font-semibold shadow-sm" style={{background: 'rgba(1, 135, 144, 0.1)', color: 'var(--color-brand-primary)', border: '1px solid rgba(1, 135, 144, 0.2)'}}>
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
                    <div className="mb-6 p-5 rounded-2xl bg-[#f0f9fa] border border-brand-primary/10 shadow-inner">
                        <div className="text-lg font-bold mb-4 text-brand-base">Kartu di Meja ({game.state.table.length})</div>
                        <div className="flex justify-center gap-4 flex-wrap min-h-[130px]">
                            {game.state.table.slice(-4).map((c: any, i: number) => (
                                <div key={i} className={`playing-card ${c.suit.color} new-deal`} style={{animationDelay: `${i * 0.1}s`}}>
                                    <div className="text-base font-bold text-left leading-none">{c.rank}<br/>{c.suit.symbol}</div>
                                    <div className="text-4xl text-center flex-grow flex items-center justify-center">{c.suit.symbol}</div>
                                    <div className="text-base font-bold text-right leading-none rotate-180">{c.rank}<br/>{c.suit.symbol}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-col gap-4 mb-5">
                    {isReactionPhase && game && (
                        <div className="flex flex-col gap-4">
                            <p className="font-medium text-brand-base/80">Begitu kartu muncul, cari cara bikin <span className="font-bold text-brand-primary">{game.state.targetScore}</span>.<br/>Kalau nemu atau nyerah, cepat tekan tombolmu!</p>
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
                                    <button type="button" className="standard flex-1" onClick={() => setHintModal(prev => ({...prev, show: true}))}>Lihat Hint Jawaban</button>
                                )}
                            </div>
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
                                    <button type="button" className="standard" onClick={handleAnswering}>Konfirmasi Target</button>
                                </>
                            ) : (
                                <>
                                    <div className="font-bold text-lg text-brand-primary mb-2">
                                        {game.state.players.find(p => p.id === game.state.answererId)?.name}, silahkan jawab {game.state.targetScore} dari 4 kartu di atas!
                                    </div>
                                    <div className="text-3xl font-bold text-brand-accent my-2">
                                        Waktu Tersisa: <span>{timeLeft}</span>s
                                    </div>
                                    <input type="text" value={exprInput} onChange={e => setExprInput(e.target.value)} onKeyDown={(e) => { if(e.key === 'Enter') { e.preventDefault(); handleAnswering(); } }} placeholder="Masukkan ekspresi (misal: 10 + 11 + 3)" />
                                    <button type="button" className="standard" onClick={handleAnswering}>Cek Jawaban</button>
                                </>
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
                </div>

                <div id="snackbar" className={snackbar.show ? `show ${snackbar.type}` : snackbar.type} dangerouslySetInnerHTML={{ __html: snackbar.text }}></div>
            </div>

            {hintModal.show && (
                <div className="modal-overlay show">
                    <div className="modal-content relative bg-white p-8 border-2 border-brand-primary rounded-2xl max-w-sm w-[90%] text-center shadow-2xl">
                        <div className="text-2xl font-bold mb-4 text-brand-accent">Hint Jawaban</div>
                        <div className="modal-body max-h-[250px] overflow-y-auto" dangerouslySetInnerHTML={{ __html: hintModal.html }}></div>
                        <button type="button" className="standard mt-6 w-full" onClick={() => setHintModal(prev => ({...prev, show: false}))}>Tutup</button>
                    </div>
                </div>
            )}
        </div>
    );
}
