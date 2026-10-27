"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DecoOrnament } from "./BotanicalOrnament";

const INTRO_SEEN_KEY = "jbgin:intro-seen";
// Fraction of the video (0–1) after which the overlay text starts fading in.
// The video is ~10s; the pour happens in the second half.
const TEXT_REVEAL_AT = 0.55;

interface IntroProps {
  onDone?: () => void;
}

export function Intro({ onDone }: IntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState<boolean | null>(null);
  const [canPlay, setCanPlay] = useState(false);
  const [textShown, setTextShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = window.sessionStorage.getItem(INTRO_SEEN_KEY);
    if (seen) {
      setVisible(false);
      onDone?.();
      return;
    }
    setVisible(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [onDone]);

  const dismiss = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(INTRO_SEEN_KEY, "1");
    }
    setVisible(false);
    document.body.style.overflow = "";
    onDone?.();
  };

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !visible) return;
    const tryPlay = async () => {
      try {
        await el.play();
      } catch {
        /* autoplay blocked — user can click to continue */
      }
    };
    tryPlay();
  }, [visible]);

  // Trigger text when the pour begins in the video.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !visible) return;
    const onTime = () => {
      if (!el.duration || el.duration <= 0) return;
      if (el.currentTime / el.duration >= TEXT_REVEAL_AT) {
        setTextShown(true);
      }
    };
    el.addEventListener("timeupdate", onTime);
    return () => el.removeEventListener("timeupdate", onTime);
  }, [visible]);

  if (visible === null || visible === false) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
        >
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              canPlay ? "opacity-100" : "opacity-0"
            }`}
            src="/images/intro.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onCanPlay={() => setCanPlay(true)}
            onEnded={dismiss}
            aria-hidden="true"
          />

          {/* Light wash — appears only with the text so the pour isn't flattened */}
          <AnimatePresence>
            {textShown && (
              <motion.div
                key="wash"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.35) 70%, rgba(255,255,255,0.55) 100%)",
                }}
              />
            )}
          </AnimatePresence>

          {/* Logo overlay — only shown once the pour starts */}
          <AnimatePresence>
            {textShown && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col items-center text-center px-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 }}
                  className="hairline text-[color:var(--color-navy-500)] mb-6 flex items-center gap-3"
                >
                  <span className="inline-block w-10 h-px bg-current" />
                  São Paulo Urban Distillery
                  <span className="inline-block w-10 h-px bg-current" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, delay: 0.25 }}
                  className="font-deco text-[clamp(3rem,10vw,7rem)] leading-[0.95] text-[color:var(--color-navy-500)] tracking-wider drop-shadow-[0_2px_12px_rgba(255,255,255,0.6)]"
                >
                  JARDIM
                  <br />
                  BOTÂNICO
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 1.1, delay: 0.65 }}
                  className="my-8"
                >
                  <DecoOrnament className="w-56 text-[color:var(--color-navy-500)]" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="font-display italic text-[color:var(--color-navy-500)] text-2xl md:text-3xl tracking-wide drop-shadow-[0_2px_8px_rgba(255,255,255,0.5)]"
                >
                  London Dry Gin · N<span className="underline underline-offset-2">o</span> 5
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Skip button — always available */}
          <motion.button
            type="button"
            onClick={dismiss}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 right-8 z-20 hairline text-[0.65rem] text-[color:var(--color-navy-500)] hover:text-[color:var(--color-navy-700)] flex items-center gap-3 px-4 py-2.5 backdrop-blur-sm bg-white/40 border border-[color:var(--color-navy-500)]/20 hover:border-[color:var(--color-navy-500)]/50 transition-all"
            aria-label="Pular introdução"
          >
            Pular introdução
            <span className="inline-block w-5 h-px bg-current" />
          </motion.button>

          {/* Progress indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-8 z-20 flex items-center gap-3"
          >
            <span className="hairline text-[0.6rem] text-[color:var(--color-navy-500)]/70">
              Entrando
            </span>
            <ProgressBar videoRef={videoRef} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ProgressBarProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

function ProgressBar({ videoRef }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onTime = () => {
      if (el.duration > 0) {
        setProgress((el.currentTime / el.duration) * 100);
      }
    };
    el.addEventListener("timeupdate", onTime);
    return () => el.removeEventListener("timeupdate", onTime);
  }, [videoRef]);

  return (
    <div className="w-32 h-px bg-[color:var(--color-navy-500)]/20 relative overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 bg-[color:var(--color-navy-500)] transition-[width] duration-200 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
