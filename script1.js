const schoolData = {
  institution: {
    name: "University of Cape Coast",
    shortName: "UCC",
    motto: "Veritas Nobis Lumen (Truth, Light, and Liberty)",
    location: "Cape Coast, Ghana",
    anthem: "UCC Anthem: UCC, UCC we're the liveliest of them all... To our call let us rise veritas nobis lumen.",
    contacts: {
      admissions: "admissions@ucc.edu.gh | +233 (0) 3321 32480",
      academicAffairs: "academic.affairs@ucc.edu.gh",
      international: "international@ucc.edu.gh",
      financialSupport: "stufso@ucc.edu.gh"
    }
  },

  admissions: {
    academicYear: "2026/2027",
    vouchers: {
      cost: "GH¢ 220.00",
      banks: ["GCB", "ADB", "GT Bank", "Zenith", "Fidelity", "Ghana Post"],
      ussd: ["*714*2161#", "*772*40#"],
      portal: "apply.ucc.edu.gh",
      deadlines: { sales: "August 22, 2025", submission: "August 29, 2025" }
    },
    cutOffPoints: [
      { p: "B.Ed. Accounting", m: 12, f: 18 },
      { p: "B.Ed. Arts", m: 16, f: 16 },
      { p: "B.Ed. Communication Design", m: 15, f: 17 },
      { p: "BA Communication Studies", m: 14, f: 15 },
      { p: "BCom Accounting", m: 12, f: 13 },
      { p: "BCom Finance", m: 14, f: 15 },
      { p: "BSc Computer Science", m: 14, f: 15 },
      { p: "BSc Information Technology", m: 15, f: 16 },
      { p: "BSc Nursing", m: 9, f: 10 },
      { p: "LL.B. Law", m: 8, f: 8 },
      { p: "MB ChB Medicine", m: 6, f: 7 },
      { p: "PharmD Pharmacy", m: 7, f: 8 },
      { p: "OD Optometry", m: 8, f: 9 }
    ],
    fees2026_2027: {
      ghanaianRegular: "Freshers: GHS 2,700 - 4,500 | Continuing: GHS 2,100 - 3,400",
      international: "USD 4,000 - 7,500 (Tuition only) | Total approx USD 5,600 - 9,500",
      residence: "GHS 800 - 1,200 additional for halls."
    },
    scholarships: {
      needyButBrilliant: "Managed by StuFSO. Covers tuition/residence. Apply at stufso.ucc.edu.gh with transcripts/proof of need."
    }
  },

  academics: {
    calendar: "Semester 1 starts early Sept. Semester 2 starts mid-Jan. Specific dates on student portal.",
    grading: "A(4.0, 80-100), B+(3.5, 75-79), B(3.0, 70-74), C+(2.5, 65-69), C(2.0, 60-64), D+(1.5, 55-59), D(1.0, 50-54), E(0, 0-49)",
    honors: "1st Class(3.6-4.0), 2nd Upper(3.0-3.5), 2nd Lower(2.5-2.9), 3rd Class(2.0-2.4), Pass(1.0-1.9)",
    policies: {
      deferment: "Apply to Registrar/Dean for 1 year (max 2). Must be within degree time limit.",
      registration: "Must register on portal. Failure to register = no grades/results.",
      attendance: "75-80% required for exams.",
      malpractice: "Phones/Notes in exams = rustication or expulsion."
    }
  },

  studentLife: {
    hostels: {
      policy: "In-Out-Out-Out (Freshers prioritized).",
      halls: ["Oguaa", "Atlantic", "Casley Hayford", "Adehye", "Valco", "Kwame Nkrumah"],
      booking: "Starts Oct on portal.ucc.edu.gh. First-come, first-served."
    },
    services: {
      health: "University Health Services (UHS) / Hospital. Main clinic at Main Campus.",
      counseling: "Counselling Center offers academic, emotional, and career support.",
      internships: "Use UCCSIP portal. Need Introductory Letter & Assumption of Duty Form."
    }
  },

  alumni: {
    transcripts: "Request at alumni.ucc.edu.gh using Index Number.",
    certificates: "Collect from Academic Affairs (Room 110). Re-issuance NOT allowed; apply for Attestation if lost."
  },

  faqs: [
    { q: "Awaiting results?", a: "Yes, you can apply by selecting 'Awaiting Results' on the portal." },
    { q: "Admission status?", a: "Check via text or on apply.ucc.edu.gh using your name or reference number." },
    { q: "Lost ID card?", a: "Visit Student Records Section at Academic Affairs for replacement." },
    { q: "Portal password?", a: "Use 'Reset Password' on portal.ucc.edu.gh via your phone number." }
  ]
};

// ============================================
// CHAT STATE
// ============================================
let conversationHistory = [];
const MAX_HISTORY = 10;

// ============================================
// CHAT FUNCTIONS
// ============================================
const chatWidget = document.getElementById("chatWidget")
const chatButton = document.getElementById("chatButton")
const closeChat = document.getElementById("closeChat")
const chatMessages = document.getElementById("chatMessages")
const chatInput = document.getElementById("chatInput")
const sendBtn = document.getElementById("sendBtn")

chatButton.addEventListener("click", openChat)
closeChat.addEventListener("click", closeChatWidget)
sendBtn.addEventListener("click", sendMessage)
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage()
})

function openChat() {
  chatWidget.classList.add("active")
  chatButton.classList.add("hidden")
  chatInput.focus()
}

function closeChatWidget() {
  chatWidget.classList.remove("active")
  chatButton.classList.remove("hidden")
}

function formatMessage(text) {
  text = text.replace(/### (.*?)(\n|$)/g, "<h3>$1</h3>")
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  text = text.replace(/^- (.*?)$/gm, "<li>$1</li>")
  text = text.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>")
  text = text.replace(/\n/g, "<br>")
  return text
}

function addMessage(message, isUser = false) {
  const messageDiv = document.createElement("div")
  messageDiv.className = isUser ? "user-message" : "bot-message"
  const messagePara = document.createElement("div")
  if (isUser) {
    messagePara.textContent = message
  } else {
    messagePara.innerHTML = formatMessage(message)
  }
  messageDiv.appendChild(messagePara)
  chatMessages.appendChild(messageDiv)
  chatMessages.scrollTop = chatMessages.scrollHeight

  if (!isUser) {
    conversationHistory.push({ role: "assistant", content: message });
    if (conversationHistory.length > MAX_HISTORY) conversationHistory.shift();
  } else {
    conversationHistory.push({ role: "user", content: message });
    if (conversationHistory.length > MAX_HISTORY) conversationHistory.shift();
  }
}

function showTypingIndicator() {
  const typingDiv = document.createElement("div")
  typingDiv.className = "bot-message"
  typingDiv.id = "typingIndicator"
  typingDiv.innerHTML = "<span>...</span>"
  chatMessages.appendChild(typingDiv)
  chatMessages.scrollTop = chatMessages.scrollHeight
}

function removeTypingIndicator() {
  const typingIndicator = document.getElementById("typingIndicator")
  if (typingIndicator) typingIndicator.remove()
}

async function sendMessage() {
  const messageText = chatInput.value.trim()
  if (!messageText) return

  // 1. Add User Message to UI and History
  addMessage(messageText, true)
  chatInput.value = ""
  chatInput.disabled = true
  sendBtn.disabled = true
  
  showTypingIndicator()

  try {
    const apiMessages = [
      {
        role: "system",
        content: `You are the UCC Virtual Assistant. Use the following context to answer questions about the University of Cape Coast. 
        
CONTEXT DATA:
${JSON.stringify(schoolData)}

RULES:
1. Answer follow-up questions using conversation history.
2. Be friendly, professional, and concise.
3. Keep responses SHORT (2–3 sentences max for general questions).
4. Write naturally as if talking to a person, not reading code or data.
5. Never use brackets [ ] or curly braces { } in your responses.
6. When listing programs, use natural language: *Example: "We offer BSc Information Technology, BSc Entomology and Wildlife, and more"*.
7. Use bullet points sparingly, only when listing specific items requested.
8. Avoid overloading with links – only provide links when explicitly requested or essential.
9. Only answer from provided data – never invent information.
10. Cite sources when possible (e.g., *"According to Section 3…"*).
11. Maintain contextual accuracy – avoid extrapolating beyond what is stated.
12. Handle ambiguity gracefully – if data is unclear, acknowledge it.
13. Stay consistent across different phrasings of the same question.
14. When you exhaust all data for a question, do not suggest anything afterwards.
15. Identify user type (prospective student, current student, alumni, staff) and tailor responses accordingly.
16. Distinguish between prospective vs. current student needs.
17. Direct alumni to relevant services (transcripts, alumni benefits, events).
18. Provide staff with administrative clarity (precise policies, procedures, contacts).
19. Use gentle redirection when appropriate.
20. Never assume prior knowledge – explain acronyms (e.g., SRC, FASO) the first time they appear.
21. If asked about a programme offered, reply with only the programme(s). Do not add department, links, etc.
22. Only if asked for more information about a program, provide the program website, its department, and department contact details (in natural language).
23. For program inquiries, give direct yes/no first when asked if a specific program is offered, then list related programs only if relevant to their apparent interest.
24. Admissions for international students: use internationalStudents data, keep responses short, provide only relevant information.
25. Respect academic calendar context – prioritize upcoming dates over past ones when the data allows.
26. Look for keywords in the user's query for better and efficient search.
27. Know when to escalate – if a user asks something sensitive (disciplinary issues, appeals, financial disputes) or highly specific (individual student records), state clearly that you cannot assist and direct them to the appropriate office or channel.
28. Handle misspellings gracefully – infer the intended term using context and the provided data. Respond as if they spelled it correctly, unless the intended meaning is unclear.
29. When a misspelling creates ambiguity, acknowledge it briefly: *"Did you mean Information Technology?"* then proceed with the relevant information.
30. Do not correct the user's spelling explicitly – avoid phrases like "You misspelled…" or "Actually it's spelled…" Simply respond with the correct information naturally.
31. Ignore minor typos – focus on the root of the word.
32. For "how many" questions, respond with just the number.
33. If the user only asks "how many" without any prior context, simply state the total number from the data. Do not add explanations, breakdowns, or additional commentary.
34. Only provide a breakdown or additional details if the user explicitly asks for them after receiving the total number.
35. If the data does not contain an exact number, state that clearly rather than estimating or approximating.
36. When the data contains multiple numbers that could answer the question, determine which number best matches the user's intent based on context.
37. For questions about counts of programs, departments, or similar, list the number first, then optionally provide a brief breakdown if it is relevant to the query.
38. If a user asks "how many" in a vague way (e.g., "how many programs do you have?"), clarify whether they mean undergraduate, postgraduate, or total before answering if the data distinguishes between them.
39. Never round numbers – present counts exactly as they appear in the data.
40. For comparative "how many" questions (e.g., "how many international students vs local students?"), present both numbers clearly, ideally side by side in natural language.
41. For general questions, keep responses to 2–3 sentences as stated in guideline 3.
42. If a question requires a longer response (e.g., step-by-step instructions, detailed explanations, or multiple pieces of information), break it into short, scannable sections using natural paragraph breaks.
43. When a longer response is necessary, state the most important information first, then provide supporting details.
44. If a response would exceed a reasonable length (approximately 5–7 sentences), offer to provide the information in parts: *"I can help with that. Would you like me to start with application requirements first?"*
45. Never use lengthy introductions or filler phrases like "Thank you for your question" before delivering long responses. Get straight to the answer.
46. For complex questions with multiple parts, answer each part separately using brief paragraphs or short bullet points (when guideline 7 permits).
47. If the user asks a very broad question that would require an extremely long response, guide them to be more specific: *"I can help with that. Are you looking for undergraduate or postgraduate programs?"*
48. If the data contains a long response, do not output it entirely. Extract only the portion that directly answers the user's question.
49. Prioritize the user's specific intent over completeness. Give exactly what was asked for, nothing more.
50. When summarizing, be straightforward and concise. State the essential information in 1–3 sentences unless the user indicates they want more detail.
51. If the user asks a specific question (e.g., "what is the deadline?"), pull only the deadline from the data. Do not include surrounding context like program descriptions, department details, or application steps unless relevant to the question.
52. For broad questions like "tell me about X," provide a brief overview (2–3 sentences) covering the most important points, then offer to share more: *"Would you like more details on admissions or program structure?"*
53. Never assume the user wants the full text from the data. Act as a filter, delivering only what matches the keywords and intent in their query.
54. If the user asks a follow-up question after a summary, then provide the specific additional information they request.
55. When deciding what to include, ask yourself: "Does this directly answer what the user is asking for?" If not, leave it out.
56. If a prospective student asks about programs offered or wants to know more programs after you have responded, direct them to the full program catalogue: "You can visit <a href="https://admissions.ucc.edu.gh/catalogue">admissions.ucc.edu.gh/catalogue</a> to explore all programs we offer." `
      },
      ...conversationHistory
    ];

    const response = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: apiMessages,
        temperature: 0.5,
        max_tokens: 1500,
        stream: true // ENABLE STREAMING
      }),
    })

    if (!response.ok) throw new Error("Connection Error")

    removeTypingIndicator()

    // Create a NEW bot message bubble for the stream
    const botMessageDiv = document.createElement("div")
    botMessageDiv.className = "bot-message"
    const botMessagePara = document.createElement("div")
    botMessageDiv.appendChild(botMessagePara)
    chatMessages.appendChild(botMessageDiv)

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let fullContent = ""
    let buffer = "" // Buffer for partial chunks

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const chunk = decoder.decode(value, { stream: true })
      buffer += chunk
      
      const lines = buffer.split("\n")
      buffer = lines.pop() // Keep the last partial line in the buffer
      
      for (const line of lines) {
        const trimmedLine = line.trim()
        if (!trimmedLine || trimmedLine === "data: [DONE]") continue
        
        if (trimmedLine.startsWith("data: ")) {
          const dataStr = trimmedLine.replace("data: ", "")
          try {
            const json = JSON.parse(dataStr)
            const content = json.choices[0].delta.content || ""
            fullContent += content
            
            // Update UI
            botMessagePara.innerHTML = formatMessage(fullContent)
            chatMessages.scrollTop = chatMessages.scrollHeight
          } catch (e) {
            // If it fails to parse, it might be a partial JSON despite splitting by \n
            // We'll put it back in the buffer for the next chunk
            buffer = line + "\n" + buffer 
          }
        }
      }
    }

    // Add finalized response to history
    conversationHistory.push({ role: "assistant", content: fullContent });
    if (conversationHistory.length > MAX_HISTORY) conversationHistory.shift();

  } catch (error) {
    removeTypingIndicator()
    addMessage("Error connecting to assistant.", false)
    console.error(error)
  } finally {
    chatInput.disabled = false
    sendBtn.disabled = false
    chatInput.focus()
  }
}
