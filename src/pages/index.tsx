import { useRef, useEffect, useCallback, MutableRefObject } from "react";
import type { NextPage } from "next";
import { History } from "../components/history";
import { useHistory } from "../hooks/history";
import { Input } from "../components/input";
import { about } from "../utils/bin";

interface IndexPageProps {
    inputRef: MutableRefObject<HTMLInputElement>;
}

const IndexPage: NextPage<IndexPageProps> = ({ inputRef }) => {
    const containerRef = useRef(null);
    const {
        history,
        command,
        lastCommandIndex,
        setCommand,
        setHistory,
        clearHistory,
        setLastCommandIndex,
    } = useHistory([]);

    const init = useCallback(() => setHistory(about()), []);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [history]);

    useEffect(() => {
        init();
    }, [init]);

    return (
        <>
            <div className="h-full p-4 border-2 rounded-sm border-terminal-black">
                <div ref={containerRef} className="">
                    <History history={history} />
                    <Input
                        inputRef={inputRef}
                        containerRef={containerRef}
                        command={command}
                        history={history}
                        lastCommandIndex={lastCommandIndex}
                        setCommand={setCommand}
                        setHistory={setHistory}
                        setLastCommandIndex={setLastCommandIndex}
                        clearHistory={clearHistory}
                    />
                </div>
            </div>
        </>
    );
};

export default IndexPage;
