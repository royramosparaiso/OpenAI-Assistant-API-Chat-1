// useChatState.ts
import { useState, useRef } from 'react';
import ChatManager from '../services/ChatManager';

export const useChatState = () => {
  
  
  const [assistantName, setAssistantName] = useState('');
  const [assistantModel, setAssistantModel] = useState('gpt-3.5-turbo-1106');
  const [assistantDescription, setAssistantDescription] = useState('');
  const [inputmessage, setInputmessage] = useState('');
  const [chatMessages, setChatMessages] = useState<{ role: string; content: any; }[]>([]);
  const [chatStarted, setChatStarted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [file, setFile] = useState<File>();
  const [threadId, setThreadId] = useState<string | null>(null);
  const [isStartLoading, setStartLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [initialThreadMessage, setInitialThreadMessage] = useState('Introduce yourself based on the assistant information provided. Be short and clear. You are an AI digital assistant developed by Roy. Specify the company name and your role.');
  const [statusMessage, setStatusMessage] = useState('');
  const counter = useRef(0);
  const inputRef = useRef(null);
  const formRef = useRef(null);
  const [chatManager, setChatManager] = useState<ChatManager | null>(null);
  const [assistantId, setAssistantId] = useState<string | null>(process.env.REACT_APP_ASSISTANT_ID || '');
  const [isMessageLoading, setIsMessageLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoadingFirstMessage, setIsLoadingFirstMessage] = useState(false);

  return {
    assistantName, setAssistantName,
    assistantModel, setAssistantModel,
    assistantDescription, setAssistantDescription,
    inputmessage, setInputmessage,
    chatMessages, setChatMessages,
    chatStarted, setChatStarted,
    isButtonDisabled, setIsButtonDisabled,
    file, setFile,
    assistantId, setAssistantId,
    threadId, setThreadId,
    isStartLoading, setStartLoading,
    isSending, setIsSending,
    statusMessage, setStatusMessage,
    counter,
    inputRef,
    formRef,
    initialThreadMessage, 
    setInitialThreadMessage,
    chatManager, setChatManager,
    isMessageLoading, setIsMessageLoading,
    progress, setProgress,
    isLoadingFirstMessage, setIsLoadingFirstMessage,
    

  };
};