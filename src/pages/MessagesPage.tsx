
import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AvatarWithInfo } from "@/components/ui/avatar-with-info";
import { Textarea } from "@/components/ui/textarea";
import { 
  formatDistanceToNow, 
  parseISO, 
  isToday, 
  isYesterday, 
  format 
} from "date-fns";
import { messages, getUserById } from "@/data/mockData";
import { Send, User } from "lucide-react";

export default function MessagesPage() {
  const [activeUserId, setActiveUserId] = useState<string | null>("2");
  const [messageText, setMessageText] = useState("");
  
  // Get the current user (for the demo, we're hardcoding user 1)
  const currentUserId = "1";
  
  // Get all messages for the current user
  const userMessages = messages.filter(msg => 
    msg.senderId === currentUserId || msg.receiverId === currentUserId
  );
  
  // Get unique conversation partners
  const conversationPartners = Array.from(new Set(
    userMessages.map(msg => 
      msg.senderId === currentUserId ? msg.receiverId : msg.senderId
    )
  ));
  
  // Get messages for the active conversation
  const activeConversation = activeUserId 
    ? messages.filter(
        msg => 
          (msg.senderId === currentUserId && msg.receiverId === activeUserId) ||
          (msg.receiverId === currentUserId && msg.senderId === activeUserId)
      ).sort((a, b) => 
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      )
    : [];
  
  // Format message timestamp
  const formatMessageTime = (timestamp: string) => {
    const date = parseISO(timestamp);
    
    if (isToday(date)) {
      return format(date, "h:mm a");
    } else if (isYesterday(date)) {
      return "Yesterday";
    } else {
      return format(date, "MMM d");
    }
  };
  
  // Handle sending a new message
  const handleSendMessage = () => {
    if (!messageText.trim() || !activeUserId) return;
    
    // In a real app, this would call an API to store the message
    console.log("Sending message:", messageText, "to user:", activeUserId);
    
    // Clear the input
    setMessageText("");
  };
  
  // Handle pressing Enter to send a message
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Messages</h1>
            <p className="text-gray-600">
              Connect with potential teammates and discuss your projects
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex h-[600px]">
              {/* Contacts List */}
              <div className="w-full md:w-72 border-r border-gray-200 overflow-y-auto">
                <div className="p-4">
                  <Input
                    placeholder="Search conversations..."
                    className="mb-4"
                  />
                </div>
                
                <div className="divide-y divide-gray-200">
                  {conversationPartners.map(partnerId => {
                    const partner = getUserById(partnerId);
                    if (!partner) return null;
                    
                    // Get the last message in this conversation
                    const lastMessage = userMessages
                      .filter(msg => 
                        msg.senderId === partnerId || msg.receiverId === partnerId
                      )
                      .sort((a, b) => 
                        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
                      )[0];
                    
                    // Check if there are unread messages
                    const hasUnread = userMessages
                      .some(msg => 
                        msg.receiverId === currentUserId &&
                        msg.senderId === partnerId &&
                        !msg.read
                      );
                    
                    return (
                      <div 
                        key={partnerId}
                        className={`p-3 cursor-pointer ${
                          activeUserId === partnerId ? "bg-purple-50" : "hover:bg-gray-50"
                        }`}
                        onClick={() => setActiveUserId(partnerId)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <AvatarWithInfo
                              name={partner.name}
                              avatarUrl={partner.avatar}
                              size="sm"
                            />
                            {hasUnread && (
                              <span className="absolute -top-1 -right-1 bg-purple-500 rounded-full w-3 h-3"></span>
                            )}
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="flex justify-between">
                              <span className={`font-medium text-sm ${hasUnread ? "text-black" : "text-gray-700"}`}>
                                {partner.name}
                              </span>
                              {lastMessage && (
                                <span className="text-xs text-gray-500">
                                  {formatMessageTime(lastMessage.timestamp)}
                                </span>
                              )}
                            </div>
                            {lastMessage && (
                              <p className={`text-xs truncate ${hasUnread ? "font-medium text-gray-900" : "text-gray-500"}`}>
                                {lastMessage.content}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Messages */}
              <div className="hidden md:flex flex-col flex-grow">
                {activeUserId ? (
                  <>
                    {/* Conversation Header */}
                    <div className="p-4 border-b border-gray-200">
                      <AvatarWithInfo
                        name={getUserById(activeUserId)?.name || "User"}
                        avatarUrl={getUserById(activeUserId)?.avatar || ""}
                        location={getUserById(activeUserId)?.location}
                        size="sm"
                      />
                    </div>
                    
                    {/* Messages Area */}
                    <div className="flex-grow p-4 overflow-y-auto flex flex-col space-y-4">
                      {activeConversation.map(msg => {
                        const isCurrentUser = msg.senderId === currentUserId;
                        
                        return (
                          <div 
                            key={msg.id}
                            className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}
                          >
                            <div 
                              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                                isCurrentUser 
                                  ? "bg-purple-500 text-white" 
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              <p>{msg.content}</p>
                              <p className={`text-xs mt-1 ${isCurrentUser ? "text-purple-100" : "text-gray-500"}`}>
                                {formatMessageTime(msg.timestamp)}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Input Area */}
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex gap-2">
                        <Textarea 
                          placeholder="Write a message..."
                          className="resize-none"
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          onKeyDown={handleKeyPress}
                          rows={2}
                        />
                        <Button 
                          onClick={handleSendMessage}
                          className="self-end bg-purple-500 hover:bg-purple-600"
                          disabled={!messageText.trim()}
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                      <User className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        Select a conversation
                      </h3>
                      <p className="text-gray-500">
                        Choose a teammate to continue your conversation
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Mobile: Empty state when no conversation selected */}
              <div className="flex md:hidden flex-col flex-grow items-center justify-center">
                <User className="h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  Your Messages
                </h3>
                <p className="text-gray-500 text-center max-w-xs mb-4">
                  Select a conversation from the list to view messages on mobile
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
