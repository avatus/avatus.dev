import * as bin from "./index";

export const help = (args: string[]): string => {
    const commands = Object.keys(bin).sort().join("\n");

    return `Available commands:\n${commands}\n\n[tab]\t   trigger completion.\n[ctrl+l]   clear terminal.\n[ctrl+c]   cancel command.`;
};

export const resume = (args?: string[]): string => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = `resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return `Downloading resume...`;
};

export const github = (args?: string[]): string => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = `https://github.com/avatus`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return `Navigation to GitHub...`;
};

export const music = (args?: string[]): string => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = `https://soundcloud.com/avatus`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return `Navigation to GitHub...`;
};
