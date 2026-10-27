"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const INTRO_SEEN_KEY = "jbgin:intro-seen";
// Fractions of the video (0–1) between which the label overlay is visible.
// Video is ~10s. The pour-into-close-up-glass is from ~5.8s to ~7.2s —
// show the label only in that window so it never overlaps the bottle.
const LABEL_SHOW_AT = 0.38;
const LABEL_HIDE_AT = 0.72;

interface IntroProps {
  onDone?: () => void;
}

export function Intro({ onDone }: IntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState<boolean | null>(null);
  const [canPlay, setCanPlay] = useState(false);
  const [labelShown, setLabelShown] = useState(false);

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

  // Show the label only while the glass is in close-up (no bottle visible).
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !visible) return;
    const onTime = () => {
      if (!el.duration || el.duration <= 0) return;
      const t = el.currentTime / el.duration;
      setLabelShown(t >= LABEL_SHOW_AT && t < LABEL_HIDE_AT);
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
            {labelShown && (
              <motion.div
                key="wash"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8, ease: [0.33, 0, 0.4, 1] }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.35) 70%, rgba(255,255,255,0.55) 100%)",
                }}
              />
            )}
          </AnimatePresence>

          {/* Label overlay — the actual brand label appears over the pour */}
          <AnimatePresence>
            {labelShown && (
              <motion.div
                key="label"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{
                  opacity: { duration: 2.2, ease: [0.33, 0, 0.4, 1] },
                  scale: { duration: 2.6, ease: [0.22, 1, 0.36, 1] },
                }}
                className="relative z-10 flex items-center justify-center px-6"
              >
                <div className="relative w-[min(92vw,760px)] aspect-[1792/2372] drop-shadow-[0_12px_40px_rgba(255,255,255,0.55)]">
                  <Image
                    src="/images/label-full-ink.png"
                    alt="Rótulo completo do Jardim Botânico London Dry Gin"
                    fill
                    priority
                    sizes="(min-width: 768px) 760px, 92vw"
                    className="object-contain object-center"
                  />
                </div>
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
