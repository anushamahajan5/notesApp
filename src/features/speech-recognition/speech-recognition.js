import { useRef, useEffect, useCallback } from "react";
import { useSpeechRecognition } from "./use-speech-recognition";

export const SpeechRecognition = () => {
  const {
    browserSupport,
    transcript,
    setTranscript,
    speechErrMessage,
    startSpeechRec,
    speechRecVarsRef,
    abort,
  } = useSpeechRecognition();

  const linkRef = useRef();
  const downloadTranscript = useCallback(() => {
    let blob = new Blob([transcript.split(`.`).join(`\n`)], {
      type: `text/plain`,
    });
    linkRef.current.href = URL.createObjectURL(blob);
  }, [transcript]);
  const handleChange = (value) => {
    setTranscript((prev) => {
      return { ...prev, note: value };
    });
  };
  useEffect(() => {
    return () => URL.revokeObjectURL(linkRef.current?.href);
  }, []);
  if (!browserSupport) {
    return (
      <p>
        Your browser lacks support for the Web Speech Recognition service,
        sorry.
      </p>
    );
  }
  return (
    <section>
      <button onClick={startSpeechRec}>
        {!speechRecVarsRef.current.listening
          ? `Start listening`
          : `listening ...`}
      </button>
      <button onClick={abort}>Stop speech recognition service</button>
      <p>{transcript.preview}</p>
      {transcript.note ? (
        <div>
          <br />
          <div>
            <textarea
              value={transcript.note}
              onChange={({ target: { value } }) => handleChange(value)}
            ></textarea>
            {speechRecVarsRef.current.noMatch && (
              <p>Not very loud, let's hear it again ...</p>
            )}
            <p style={{ textAlign: `center` }}>
              Your voice is being recorded in <b>{navigator.language}</b>
            </p>
          </div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            download="transcript.txt"
            onClick={downloadTranscript}
            ref={linkRef}
          >
            Download transcript
          </a>
        </div>
      ) : (
        speechErrMessage && (
          <h3>Error occurred in recognising speech: {speechErrMessage}</h3>
        )
      )}
    </section>
  );
};
