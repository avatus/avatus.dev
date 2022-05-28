import React from "react";
import { commandExists } from "../../utils/commandExists";
import { shell } from "../../utils/shell";
import { handleTabCompletion } from "../../utils/tabCompletion";
import { Ps1 } from "../ps1";

export const Input = ({
    inputRef,
    containerRef,
    command,
    history,
    lastCommandIndex,
    setCommand,
    setHistory,
    setLastCommandIndex,
    clearHistory,
}: any) => {
    const onSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        const commands: [string] = history
            .map(({ command }: any) => command)
            .filter((command: string) => command);

        if (event.key === "c" && event.ctrlKey) {
            event.preventDefault();

            setCommand("");

            setHistory("");

            setLastCommandIndex(0);
        }

        if (event.key === "l" && event.ctrlKey) {
            event.preventDefault();

            clearHistory();
        }

        if (event.key === "Tab") {
            event.preventDefault();

            handleTabCompletion(command, setCommand);
        }

        if (event.key === "Enter" || event.code === "13") {
            event.preventDefault();

            setLastCommandIndex(0);

            await shell(
                history,
                command.toLowerCase(),
                setHistory,
                clearHistory,
                setCommand
            );

            containerRef.current.scrollIntoView(false);
        }

        if (event.key === "ArrowUp") {
            event.preventDefault();

            if (!commands.length) {
                return;
            }

            const index: number = lastCommandIndex + 1;

            if (index <= commands.length) {
                setLastCommandIndex(index);
                setCommand(commands[commands.length - index]);
            }
        }

        if (event.key === "ArrowDown") {
            event.preventDefault();

            if (!commands.length) {
                return;
            }

            const index: number = lastCommandIndex - 1;

            if (index > 0) {
                setLastCommandIndex(index);
                setCommand(commands[commands.length - index]);
            } else {
                setLastCommandIndex(0);
                setCommand("");
            }
        }
    };

    const onChange = ({
        target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
        setCommand(value);
    };

    return (
        <div className="flex flex-row space-x-2">
            <label htmlFor="prompt" className="flex-shrink">
                <Ps1 />
            </label>

            <input
                ref={inputRef}
                id="prompt"
                type="text"
                className={`focus:outline-none flex-grow bg-night ${
                    commandExists(command) || command === ""
                        ? "text-terminal-green"
                        : "text-terminal-red"
                }`}
                value={command}
                onChange={onChange}
                autoFocus
                onKeyDown={onSubmit}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
            />
        </div>
    );
};

export default Input;
