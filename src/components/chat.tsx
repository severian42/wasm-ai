'use client'

import { useChat, type Message } from 'ai/react'
import { useLocalStorage } from '@/lib/hooks/use-local-storage'
import { toast } from 'react-hot-toast'
import { cn } from '@/lib/utils'

import { ChatList } from '@/components/chat-list'
import { ChatPanel } from '@/components/chat-panel'
import { EmptyScreen } from '@/components/empty-screen'
import { ChatScrollAnchor } from '@/components/chat-scroll-anchor'
// import { useLocalChat } from '../lib/wasmllm/use-wasm-llm'
// import { SUPPORTED_LOCAL_MODELS } from '../lib/wasmllm/wasmllm'
// import { useLocalChat } from '../lib/wasmllm/use-wasm-llm'

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id?: string
}

export function Chat({ id, initialMessages, className }: ChatProps) {
  // const c = useLocalChat({
  //   model: SUPPORTED_LOCAL_MODELS['dolphin-2.2'],
  //   initialMessages: initialMessages?.map(message => message.content),
  //   initialInput: ''
  // })


  const [previewToken, setPreviewToken] = useLocalStorage<string | null>(
    'ai-token',
    null
  )
  const { messages, append, reload, stop, isLoading, input, setInput } =
    useChat({
      initialMessages,
      id,
      body: {
        id,
        previewToken
      },
      onResponse(response) {
        if (response.status === 401) {
          toast.error(response.statusText)
        }
      }
    })
  return (
    <>
      <div className={cn('pb-[200px] pt-4 md:pt-10', className)}>
        {messages.length ? (
          <>
            <ChatList messages={messages} />
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
        ) : (
          <EmptyScreen setInput={setInput} />
        )}
      </div>
      <ChatPanel
        id={id}
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={messages}
        input={input}
        setInput={setInput}
      />
    </>
  )
}
