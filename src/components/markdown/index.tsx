import React from "react";
import ReactMarkdown from "react-markdown";

interface DisplayMarkdownProps {
  content: string;
}

const DisplayMarkdown: React.FC<DisplayMarkdownProps> = ({ content }) => {
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default DisplayMarkdown;
