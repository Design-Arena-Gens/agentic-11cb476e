'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState(0)
  const [readChapters, setReadChapters] = useState<Set<number>>(new Set([0]))

  useEffect(() => {
    const saved = localStorage.getItem('readChapters')
    if (saved) {
      setReadChapters(new Set(JSON.parse(saved)))
    }
  }, [])

  const markAsRead = (chapter: number) => {
    const updated = new Set(readChapters)
    updated.add(chapter)
    setReadChapters(updated)
    localStorage.setItem('readChapters', JSON.stringify(Array.from(updated)))
  }

  const changeChapter = (index: number) => {
    setCurrentChapter(index)
    markAsRead(index)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const chapters = [
    {
      title: "Introduction: The Journey Begins",
      content: (
        <>
          <h2>Introduction: The Journey Begins</h2>
          <p>
            Welcome to <strong>The Path to Mastery</strong>, a comprehensive guide designed to transform your approach to life, work, and personal development. This book is not just about reading—it's about implementing, experiencing, and becoming.
          </p>
          <div className="quote">
            Success is not an accident. It is the result of deliberate choices, disciplined action, and unwavering focus.
          </div>
          <p>
            Throughout history, the most successful individuals—from ancient philosophers to modern entrepreneurs—have followed certain universal principles. They understood that success is not a destination but a journey, and that journey requires discipline, focus, and a set of guiding rules.
          </p>
          <h3>What You'll Discover</h3>
          <p>
            In this book, you will explore the four pillars that support all lasting achievement:
          </p>
          <ul>
            <li><strong>Discipline</strong> - The foundation of all success</li>
            <li><strong>Focus</strong> - The power of directed attention</li>
            <li><strong>Rules</strong> - Systems that create freedom</li>
            <li><strong>Action</strong> - The bridge between dreams and reality</li>
          </ul>
          <div className="highlight-box">
            <h3>How to Use This Book</h3>
            <p>
              This is an interactive experience. Each chapter builds upon the previous one. Take notes, reflect on the questions posed, and most importantly—apply what you learn immediately. Knowledge without application is merely entertainment.
            </p>
          </div>
          <p>
            The path to mastery is not easy, but it is simple. It requires commitment, consistency, and courage. Are you ready to begin?
          </p>
        </>
      )
    },
    {
      title: "Chapter 1: The Foundation of Discipline",
      content: (
        <>
          <h2>Chapter 1: The Foundation of Discipline</h2>
          <div className="quote">
            Discipline is the bridge between goals and accomplishment.
          </div>
          <p>
            Discipline is not punishment. It is not restriction. Discipline is the highest form of self-love. It is choosing what you want most over what you want now. It is the conscious decision to prioritize your future self over your present comfort.
          </p>
          <h3>Understanding True Discipline</h3>
          <p>
            Many people misunderstand discipline as a form of self-deprivation. In reality, discipline is liberation. When you master discipline, you free yourself from the tyranny of momentary impulses and emotional reactions. You become the architect of your life rather than a passive observer.
          </p>
          <div className="highlight-box">
            <h3>The Discipline Equation</h3>
            <p><strong>Discipline = Clear Vision + Consistent Action + Delayed Gratification</strong></p>
            <p>
              Without a clear vision, discipline has no direction. Without consistent action, discipline remains theoretical. Without delayed gratification, discipline crumbles at the first temptation.
            </p>
          </div>
          <h3>Building Your Discipline Muscle</h3>
          <p>
            Like physical muscles, discipline grows stronger with regular exercise. Here's how to develop it:
          </p>
          <ol>
            <li><strong>Start Small</strong> - Don't try to transform your entire life overnight. Begin with one simple commitment and honor it daily.</li>
            <li><strong>Create Non-Negotiables</strong> - Identify 3-5 daily actions that are absolutely non-negotiable, regardless of how you feel.</li>
            <li><strong>Embrace Discomfort</strong> - Growth happens outside your comfort zone. Deliberately seek small discomforts daily.</li>
            <li><strong>Track Your Wins</strong> - Keep a discipline journal. Record every time you choose discipline over impulse.</li>
            <li><strong>Remove Temptations</strong> - Design your environment to make discipline easier and temptation harder.</li>
          </ol>
          <h3>The Morning Ritual</h3>
          <p>
            Your morning sets the tone for your entire day. A disciplined morning creates momentum that carries through every subsequent hour. Consider implementing:
          </p>
          <ul>
            <li>Wake at the same time daily (even weekends)</li>
            <li>No phone for the first hour</li>
            <li>Physical movement (exercise, stretching, or walking)</li>
            <li>Mental priming (meditation, journaling, or reading)</li>
            <li>Healthy nutrition (fuel your body properly)</li>
          </ul>
          <div className="quote">
            How you do anything is how you do everything. Master the small disciplines, and the large ones become inevitable.
          </div>
          <p>
            Remember: Discipline is not about perfection. It's about progress. Every time you choose discipline, you cast a vote for the person you want to become. Those votes accumulate, and eventually, they define your identity.
          </p>
        </>
      )
    },
    {
      title: "Chapter 2: The Power of Laser Focus",
      content: (
        <>
          <h2>Chapter 2: The Power of Laser Focus</h2>
          <div className="quote">
            Where attention goes, energy flows, and results show.
          </div>
          <p>
            In an age of infinite distraction, focus has become a superpower. The ability to direct and sustain your attention on what matters most is perhaps the most valuable skill you can develop in the 21st century.
          </p>
          <h3>The Attention Economy</h3>
          <p>
            Your attention is being systematically hijacked by technologies designed by the brightest minds in the world. Social media, notifications, streaming services—all engineered to capture and hold your focus. The average person now has an attention span shorter than a goldfish. But you are not average. You are reading this book because you want more.
          </p>
          <div className="highlight-box">
            <h3>The Cost of Distraction</h3>
            <p>
              Studies show that it takes an average of 23 minutes to fully return to a task after an interruption. If you're interrupted every 10 minutes, you never actually achieve deep focus. This isn't just lost time—it's lost quality, lost creativity, and lost excellence.
            </p>
          </div>
          <h3>The Three Levels of Focus</h3>
          <p><strong>1. Tactical Focus (The What)</strong></p>
          <p>
            This is your ability to concentrate on the task at hand. It's single-tasking, deep work, and complete immersion. Tactical focus is what allows you to produce your best work.
          </p>
          <p><strong>2. Strategic Focus (The Why)</strong></p>
          <p>
            Strategic focus is about directing your efforts toward the right activities. It's easy to be busy. It's hard to be effective. Strategic focus ensures you're climbing the right mountain, not just climbing efficiently.
          </p>
          <p><strong>3. Life Focus (The Who)</strong></p>
          <p>
            This is the highest level. Life focus is about clarity on who you want to become and what truly matters to you. It's your North Star, guiding all other decisions.
          </p>
          <h3>Building Unbreakable Focus</h3>
          <ol>
            <li><strong>Eliminate Before You Optimize</strong> - Before trying to focus better, remove distractions. Delete social media apps. Use website blockers. Create a focus-friendly environment.</li>
            <li><strong>Time Blocking</strong> - Assign specific blocks of time to specific activities. Protect these blocks as fiercely as you would an important meeting.</li>
            <li><strong>The 90-Minute Rule</strong> - Work in 90-minute focused sessions followed by 15-20 minute breaks. This aligns with your brain's natural ultradian rhythms.</li>
            <li><strong>Single-Tasking</strong> - Multitasking is a myth. The brain switches between tasks, losing efficiency with each switch. Do one thing at a time, completely.</li>
            <li><strong>The 5-Hour Rule</strong> - Dedicate at least one hour per weekday to deliberate learning and development. This compounds into mastery over time.</li>
          </ol>
          <div className="highlight-box">
            <h3>The Focus Formula</h3>
            <p><strong>Clear Goal + Eliminated Distractions + Energy Management = Deep Focus</strong></p>
          </div>
          <h3>Training Your Focus Muscle</h3>
          <p>
            Focus is like a muscle—it must be trained. Try these exercises:
          </p>
          <ul>
            <li><strong>Meditation</strong> - Even 10 minutes daily trains your attention control</li>
            <li><strong>Reading Physical Books</strong> - No hyperlinks, no notifications, just sustained attention</li>
            <li><strong>The Pomodoro Technique</strong> - 25 minutes focused work, 5 minutes rest, repeat</li>
            <li><strong>Attention Journaling</strong> - Track when your focus wavers and identify patterns</li>
          </ul>
          <div className="quote">
            The focused mind is not just more productive—it experiences life more deeply, creates more meaningfully, and achieves more substantially.
          </div>
          <p>
            Your focus is your most precious resource. Protect it. Cultivate it. Use it wisely. Everything you want to achieve requires it.
          </p>
        </>
      )
    },
    {
      title: "Chapter 3: Rules That Set You Free",
      content: (
        <>
          <h2>Chapter 3: Rules That Set You Free</h2>
          <div className="quote">
            Structure creates freedom. Rules eliminate decision fatigue and amplify your power.
          </div>
          <p>
            This may seem paradoxical: how can rules create freedom? The answer lies in understanding that unlimited choices lead to paralysis, while clear constraints lead to liberation. When you establish the right rules for your life, you free up mental energy for what truly matters.
          </p>
          <h3>The Problem with Too Much Freedom</h3>
          <p>
            Research on decision fatigue shows that the average person makes over 35,000 decisions per day. Each decision depletes your mental reserves. By the end of the day, your willpower is exhausted, making you more likely to make poor choices.
          </p>
          <p>
            The solution? Create rules that automate good decisions and eliminate bad options entirely.
          </p>
          <div className="highlight-box">
            <h3>The Power of Personal Rules</h3>
            <p>
              Barack Obama and Mark Zuckerberg wear the same outfit daily. Why? To eliminate unnecessary decisions. Steve Jobs had strict rules about his daily routine. These aren't limitations—they're liberation from trivial choices, freeing mental energy for important decisions.
            </p>
          </div>
          <h3>Types of Rules You Need</h3>
          <p><strong>1. Identity Rules</strong></p>
          <p>
            These define who you are, not just what you do. For example:
          </p>
          <ul>
            <li>"I am someone who keeps their word, always"</li>
            <li>"I am someone who invests in personal growth daily"</li>
            <li>"I am someone who maintains physical excellence"</li>
          </ul>
          <p><strong>2. Boundary Rules</strong></p>
          <p>
            These protect your time, energy, and values:
          </p>
          <ul>
            <li>"I don't check email before 10 AM"</li>
            <li>"I don't consume social media on weekdays"</li>
            <li>"I don't miss workouts, period"</li>
            <li>"I don't engage in gossip or negative conversations"</li>
          </ul>
          <p><strong>3. Growth Rules</strong></p>
          <p>
            These ensure continuous improvement:
          </p>
          <ul>
            <li>"I read for 30 minutes every morning"</li>
            <li>"I learn one new skill per quarter"</li>
            <li>"I review my goals weekly and adjust monthly"</li>
          </ul>
          <p><strong>4. Relationship Rules</strong></p>
          <p>
            These govern how you interact with others:
          </p>
          <ul>
            <li>"I respond to messages within 24 hours"</li>
            <li>"I give people my full attention in conversations"</li>
            <li>"I express gratitude to someone daily"</li>
          </ul>
          <h3>Creating Your Personal Constitution</h3>
          <p>
            Your personal constitution is a set of non-negotiable rules that guide your behavior regardless of circumstances or emotions. Here's how to create it:
          </p>
          <ol>
            <li><strong>Identify Your Values</strong> - What matters most to you? Health? Growth? Family? Integrity? List your top 5 values.</li>
            <li><strong>Define Supporting Rules</strong> - For each value, create 2-3 specific rules that honor it.</li>
            <li><strong>Make Them Measurable</strong> - Vague rules don't work. "Be healthy" is vague. "Exercise for 45 minutes, 5 days per week" is clear.</li>
            <li><strong>Start with Keystone Rules</strong> - Identify 1-3 rules that, if followed, would have the biggest positive impact on your life. Master these first.</li>
            <li><strong>Write Them Down</strong> - Your constitution should be written, visible, and reviewed regularly.</li>
          </ol>
          <div className="highlight-box">
            <h3>The 10 Universal Rules of High Achievers</h3>
            <ol>
              <li>Wake early and own your morning</li>
              <li>Move your body daily</li>
              <li>Feed your mind before your phone</li>
              <li>Do the hardest thing first</li>
              <li>Honor your word to yourself above all</li>
              <li>Invest in relationships that matter</li>
              <li>Say no to everything that doesn't align with your goals</li>
              <li>Reflect daily, review weekly, plan monthly</li>
              <li>Never stop learning</li>
              <li>Rest is productive—honor your recovery</li>
            </ol>
          </div>
          <h3>Enforcing Your Rules</h3>
          <p>
            Rules without enforcement are merely suggestions. Create accountability:
          </p>
          <ul>
            <li><strong>Track Daily</strong> - Use a simple checklist or app to track rule adherence</li>
            <li><strong>Share with an Accountability Partner</strong> - Make your rules public to someone who will hold you accountable</li>
            <li><strong>Create Consequences</strong> - If you break a rule, have a predetermined consequence (donate money, do extra work, etc.)</li>
            <li><strong>Review and Revise</strong> - Rules should evolve as you grow. Review quarterly.</li>
          </ul>
          <div className="quote">
            Discipline is choosing between what you want now and what you want most. Rules make that choice automatic.
          </div>
          <p>
            Your rules are not a prison—they are the framework for your freedom. They eliminate decision fatigue, clarify your priorities, and create consistency in an unpredictable world. Design them wisely, follow them faithfully, and watch your life transform.
          </p>
        </>
      )
    },
    {
      title: "Chapter 4: The Four Pillars of Success",
      content: (
        <>
          <h2>Chapter 4: The Four Pillars of Success</h2>
          <div className="quote">
            Success is not built on a single strength, but on four interdependent pillars. Neglect one, and the entire structure becomes unstable.
          </div>
          <p>
            Throughout this book, we've explored discipline, focus, and rules. Now we'll examine the complete architecture of lasting success—the four pillars that support every meaningful achievement.
          </p>
          <h3>Pillar 1: Physical Mastery</h3>
          <p>
            Your body is the vehicle through which you experience life and execute your ambitions. Without physical vitality, everything else suffers. Physical mastery isn't about looking a certain way—it's about optimizing your body's performance.
          </p>
          <p><strong>Key Components:</strong></p>
          <ul>
            <li><strong>Movement</strong> - Exercise 4-6 times per week. Combine strength training, cardiovascular work, and mobility.</li>
            <li><strong>Nutrition</strong> - Eat whole foods, prioritize protein, manage your energy levels through strategic eating.</li>
            <li><strong>Sleep</strong> - 7-9 hours nightly. This is non-negotiable. Sleep is when your body repairs and your brain consolidates learning.</li>
            <li><strong>Recovery</strong> - Active rest, stretching, massage, and stress management are crucial.</li>
          </ul>
          <div className="highlight-box">
            <p><strong>The 1% Rule:</strong> Improve your physical health by just 1% each week. In one year, you'll be 52% better. In two years, you'll be transformed.</p>
          </div>
          <h3>Pillar 2: Mental Excellence</h3>
          <p>
            Your mind is your most powerful tool. Mental excellence means developing clarity, focus, emotional intelligence, and continuous learning.
          </p>
          <p><strong>Key Components:</strong></p>
          <ul>
            <li><strong>Learning</strong> - Read daily. Study your field. Develop new skills quarterly.</li>
            <li><strong>Focus Training</strong> - Practice deep work. Eliminate distractions. Build attention control through meditation.</li>
            <li><strong>Emotional Mastery</strong> - Understand your triggers. Develop response flexibility. Practice mindfulness.</li>
            <li><strong>Mental Models</strong> - Learn how to think, not just what to think. Study philosophy, psychology, and systems thinking.</li>
          </ul>
          <p><strong>Daily Mental Practices:</strong></p>
          <ol>
            <li>Morning pages (journaling)</li>
            <li>30 minutes of reading</li>
            <li>10 minutes of meditation</li>
            <li>Evening reflection</li>
          </ol>
          <h3>Pillar 3: Emotional & Spiritual Depth</h3>
          <p>
            Success without fulfillment is the ultimate failure. This pillar is about meaning, purpose, connection, and inner peace.
          </p>
          <p><strong>Key Components:</strong></p>
          <ul>
            <li><strong>Purpose</strong> - Know your "why." What drives you beyond money and status?</li>
            <li><strong>Values</strong> - Live in alignment with your deepest values.</li>
            <li><strong>Relationships</strong> - Invest in deep, meaningful connections. Quality over quantity.</li>
            <li><strong>Gratitude</strong> - Daily practice of appreciation transforms your entire life perspective.</li>
            <li><strong>Contribution</strong> - Give back. Serve others. Leave things better than you found them.</li>
          </ul>
          <div className="highlight-box">
            <h3>The Fulfillment Formula</h3>
            <p><strong>Meaning = Contribution + Growth + Connection</strong></p>
            <p>You need all three. Contribution without growth leads to burnout. Growth without connection leads to emptiness. Connection without contribution leads to complacency.</p>
          </div>
          <h3>Pillar 4: Financial & Professional Mastery</h3>
          <p>
            Money doesn't buy happiness, but poverty doesn't buy anything. Financial mastery creates options, reduces stress, and enables you to focus on what matters most.
          </p>
          <p><strong>Key Components:</strong></p>
          <ul>
            <li><strong>Value Creation</strong> - Focus on creating value for others. Money is a byproduct of value delivered.</li>
            <li><strong>Financial Discipline</strong> - Spend less than you earn. Invest the difference. Compound your wealth over time.</li>
            <li><strong>Skill Development</strong> - Your income is directly related to your ability to create value. Continuously improve your skills.</li>
            <li><strong>Multiple Income Streams</strong> - Don't rely on a single source. Build diversified income over time.</li>
            <li><strong>Generosity</strong> - Give first. Help others succeed. What you give comes back multiplied.</li>
          </ul>
          <p><strong>The 10-10-10-70 Rule:</strong></p>
          <ul>
            <li>10% - Give to causes you believe in</li>
            <li>10% - Invest in yourself (courses, books, coaching)</li>
            <li>10% - Save and invest for financial freedom</li>
            <li>70% - Live on this (force yourself to be efficient)</li>
          </ul>
          <h3>Balancing the Four Pillars</h3>
          <p>
            The key to lasting success is balance. A chain is only as strong as its weakest link. You cannot neglect one pillar and expect the others to compensate.
          </p>
          <div className="highlight-box">
            <h3>Weekly Pillar Audit</h3>
            <p>Every Sunday, rate each pillar on a scale of 1-10:</p>
            <ul>
              <li>Physical: How well did I care for my body this week?</li>
              <li>Mental: How much did I learn and focus?</li>
              <li>Emotional/Spiritual: How fulfilled and connected do I feel?</li>
              <li>Financial/Professional: How much value did I create?</li>
            </ul>
            <p>Any pillar below 7 needs immediate attention in the coming week.</p>
          </div>
          <h3>The Integration Practice</h3>
          <p>
            True mastery comes when these pillars integrate and support each other:
          </p>
          <ul>
            <li>Physical vitality enhances mental clarity</li>
            <li>Mental excellence improves professional performance</li>
            <li>Emotional depth provides the motivation for discipline</li>
            <li>Financial freedom creates space for spiritual growth</li>
          </ul>
          <div className="quote">
            Success is not a destination. It is the alignment of your daily actions with your deepest values across all four pillars of life.
          </div>
          <p>
            Build each pillar deliberately. Maintain them consistently. The structure of your success depends on it.
          </p>
        </>
      )
    },
    {
      title: "Chapter 5: Taking Massive Action",
      content: (
        <>
          <h2>Chapter 5: Taking Massive Action</h2>
          <div className="quote">
            Knowledge without action is the illusion of progress. The world rewards those who execute, not those who plan.
          </div>
          <p>
            You've learned about discipline, focus, rules, and the four pillars. Now comes the most critical chapter of all: ACTION. Everything you've read is worthless unless you implement it. This chapter is about bridging the gap between knowing and doing.
          </p>
          <h3>The Action Gap</h3>
          <p>
            Most people suffer from what I call the "Action Gap"—the space between what they know they should do and what they actually do. This gap is where dreams die, potential withers, and regret accumulates.
          </p>
          <p>
            Why does this gap exist? Three primary reasons:
          </p>
          <ul>
            <li><strong>Perfectionism</strong> - Waiting for the perfect plan, perfect timing, or perfect circumstances</li>
            <li><strong>Fear</strong> - Fear of failure, judgment, or the unknown</li>
            <li><strong>Overwhelm</strong> - Not knowing where to start when the goal seems massive</li>
          </ul>
          <div className="highlight-box">
            <h3>The Action Principle</h3>
            <p><strong>Imperfect action beats perfect inaction every single time.</strong></p>
            <p>You will learn more from one week of messy implementation than from one year of perfect planning. Action creates information. Information enables improvement. Improvement leads to mastery.</p>
          </div>
          <h3>The 72-Hour Rule</h3>
          <p>
            Here's a powerful truth: If you don't take action on an idea within 72 hours, the likelihood of ever acting on it drops to less than 1%. Inspiration has a short shelf life. When you feel inspired to make a change:
          </p>
          <ol>
            <li>Write down the specific action you'll take</li>
            <li>Schedule it in your calendar within 72 hours</li>
            <li>Tell someone what you're doing (accountability)</li>
            <li>Execute, no matter how small the first step</li>
          </ol>
          <h3>The Momentum Method</h3>
          <p>
            Massive action doesn't mean taking one huge leap. It means building unstoppable momentum through consistent daily action. Think of it like a flywheel—hard to start, but once it's spinning, it takes enormous energy to stop.
          </p>
          <p><strong>Building Your Momentum:</strong></p>
          <ol>
            <li><strong>Start Ridiculously Small</strong> - Want to write a book? Start with 100 words daily. Want to get fit? Start with 10 push-ups. Make it so easy you can't say no.</li>
            <li><strong>Never Break the Chain</strong> - Consistency matters more than intensity. Missing one day makes missing two days easier. Protect your streak.</li>
            <li><strong>Stack Your Wins</strong> - After mastering one habit, add another. Don't try to change everything at once.</li>
            <li><strong>Increase by 10%</strong> - Once something becomes easy, increase the difficulty by 10%. This ensures continuous growth without burnout.</li>
          </ol>
          <h3>The 5-5-5 Action System</h3>
          <p>
            This is a framework for massive action across different timeframes:
          </p>
          <p><strong>5 Daily Actions</strong> - Every day, complete these 5 non-negotiable actions that move you toward your biggest goal. Write them down each morning. Don't sleep until they're done.</p>
          <p><strong>5 Weekly Goals</strong> - Each week, identify 5 specific, measurable outcomes you will achieve. Review them daily. Adjust tactics as needed, but never lower the standard.</p>
          <p><strong>5 Monthly Milestones</strong> - Set 5 major milestones for the month. These should be significant achievements that demonstrate real progress.</p>
          <div className="highlight-box">
            <h3>Example 5-5-5 System for Career Growth</h3>
            <p><strong>Daily:</strong></p>
            <ol>
              <li>Learn for 30 minutes</li>
              <li>Create value (write, code, design, build)</li>
              <li>Network with one person</li>
              <li>Exercise</li>
              <li>Reflect and plan</li>
            </ol>
            <p><strong>Weekly:</strong></p>
            <ol>
              <li>Complete one course module</li>
              <li>Publish one piece of content</li>
              <li>Have 3 meaningful conversations</li>
              <li>Read one book</li>
              <li>Review and adjust strategy</li>
            </ol>
            <p><strong>Monthly:</strong></p>
            <ol>
              <li>Finish one major project</li>
              <li>Acquire one new skill</li>
              <li>Expand network by 20 quality connections</li>
              <li>Increase income by 10%</li>
              <li>Help 5 people achieve their goals</li>
            </ol>
          </div>
          <h3>Overcoming Action Paralysis</h3>
          <p>
            When you feel stuck, use these strategies:
          </p>
          <ul>
            <li><strong>The 2-Minute Rule</strong> - If something takes less than 2 minutes, do it immediately. This builds action bias.</li>
            <li><strong>The 10-10-10 Rule</strong> - When facing a decision, ask: How will I feel about this in 10 minutes? 10 months? 10 years? This creates perspective.</li>
            <li><strong>The Worst-Case Scenario</strong> - Write down the absolute worst thing that could happen if you take action. You'll realize it's rarely that bad.</li>
            <li><strong>The Identity Shift</strong> - Ask "What would the person I want to become do right now?" Then do that.</li>
          </ul>
          <h3>Speed of Implementation</h3>
          <p>
            The speed at which you implement new ideas is directly correlated with your success. High achievers have a bias toward action. They implement fast, fail fast, learn fast, and improve fast.
          </p>
          <div className="quote">
            The only way to win is to learn faster than anyone else. The only way to learn faster is to act faster.
          </div>
          <h3>Your Action Plan (Do This Now)</h3>
          <p>
            Don't close this book without taking action. Right now, do the following:
          </p>
          <ol>
            <li><strong>Choose One Area</strong> - Of all the concepts in this book, which one resonates most? Choose one.</li>
            <li><strong>Define One Action</strong> - What is the smallest action you can take in the next 24 hours?</li>
            <li><strong>Schedule It</strong> - Put it in your calendar with a specific time.</li>
            <li><strong>Tell Someone</strong> - Text or email one person what you're committing to.</li>
            <li><strong>Execute</strong> - Then do it. No excuses.</li>
          </ol>
          <div className="highlight-box">
            <h3>The Ultimate Action Challenge</h3>
            <p><strong>30-Day Transformation</strong></p>
            <p>Commit to 30 days of consistent action using this book's principles:</p>
            <ul>
              <li>Choose 3 daily disciplines (exercise, learning, creating)</li>
              <li>Eliminate 3 distractions (social media, Netflix, snooze button)</li>
              <li>Track your progress daily</li>
              <li>Review weekly</li>
              <li>Share your journey with an accountability partner</li>
            </ul>
            <p>In 30 days, you'll be a different person. In 90 days, your life will be different. In 365 days, people won't recognize you.</p>
          </div>
          <p>
            The time for consumption is over. The time for action is now. Close this book. Open your life. Execute.
          </p>
          <div className="quote">
            A year from now, you'll wish you had started today. So start today.
          </div>
        </>
      )
    },
    {
      title: "Conclusion: Your New Beginning",
      content: (
        <>
          <h2>Conclusion: Your New Beginning</h2>
          <div className="quote">
            This is not the end. This is the beginning of who you are becoming.
          </div>
          <p>
            Congratulations. You've completed this book. But completion means nothing without implementation. The real test begins now, in the quiet moments when no one is watching, when you must choose between comfort and growth.
          </p>
          <h3>What You Now Know</h3>
          <p>
            You understand that:
          </p>
          <ul>
            <li><strong>Discipline</strong> is the foundation—it's self-love in action, choosing your future over your momentary feelings</li>
            <li><strong>Focus</strong> is your superpower—in a world of distraction, sustained attention creates extraordinary results</li>
            <li><strong>Rules</strong> create freedom—the right constraints eliminate decision fatigue and automate excellence</li>
            <li><strong>The Four Pillars</strong> must be balanced—physical, mental, emotional/spiritual, and financial mastery work together</li>
            <li><strong>Action</strong> is everything—knowledge without execution is just entertainment</li>
          </ul>
          <h3>The Path Forward</h3>
          <p>
            Success is not a destination you reach—it's a direction you travel. Every single day, you're either moving toward the person you want to become or away from that person. There is no neutral. Staying the same while the world moves forward is actually moving backward.
          </p>
          <div className="highlight-box">
            <h3>Your Daily Commitment</h3>
            <p>Every morning, ask yourself these three questions:</p>
            <ol>
              <li>What is the most important thing I can do today?</li>
              <li>Who do I need to become to achieve my goals?</li>
              <li>How can I serve and add value today?</li>
            </ol>
            <p>Every evening, ask these three:</p>
            <ol>
              <li>Did I honor my commitments to myself?</li>
              <li>What did I learn today?</li>
              <li>How can I improve tomorrow?</li>
            </ol>
          </div>
          <h3>When You Fail (And You Will)</h3>
          <p>
            Perfection is not the goal. Progress is. You will have bad days. You will break your rules. You will lose focus. You will lack discipline. This doesn't make you a failure—it makes you human.
          </p>
          <p>
            What separates winners from everyone else is not the absence of failure, but the response to it. When you fail:
          </p>
          <ol>
            <li><strong>Acknowledge it honestly</strong> - No excuses, no victim mentality</li>
            <li><strong>Learn from it</strong> - What can this teach you?</li>
            <li><strong>Forgive yourself</strong> - Self-compassion fuels resilience</li>
            <li><strong>Recommit immediately</strong> - Don't wait for Monday or next month. Start again right now.</li>
          </ol>
          <h3>The Compound Effect</h3>
          <p>
            Small actions, repeated consistently over time, create extraordinary results. You don't need to be twice as good to get twice the results. You just need to be 1% better every day.
          </p>
          <p>
            If you improve by just 1% each day for a year, you'll be 37 times better by the end. That's not theory—it's mathematics. And it's available to anyone willing to do the work.
          </p>
          <div className="quote">
            Success is the product of daily habits, not once-in-a-lifetime transformations.
          </div>
          <h3>Your Legacy</h3>
          <p>
            One day, you will look back on your life. What will you see? Will you see someone who dreamed big but acted small? Or someone who took responsibility, showed up daily, and built something meaningful?
          </p>
          <p>
            Your legacy is not created in the moments of inspiration—it's forged in the daily grind, in the unglamorous work that nobody sees, in the consistent choice to be disciplined when it would be easier to quit.
          </p>
          <h3>The Ultimate Truth</h3>
          <p>
            Everything you want is on the other side of consistent action. There is no secret. There is no shortcut. There is only the path: discipline, focus, rules, balance, and relentless execution.
          </p>
          <p>
            You are capable of far more than you imagine. Your potential is not fixed—it expands as you grow. The person you'll be in five years is being created by what you do today.
          </p>
          <div className="highlight-box">
            <h3>Your Promise to Yourself</h3>
            <p>Write this down and put it somewhere you'll see daily:</p>
            <p style={{ fontStyle: 'italic', fontSize: '1.1em' }}>
              "I commit to becoming the person I'm capable of being. I will not settle for less than my potential. I will show up daily, even when I don't feel like it. I will honor my word to myself above all others. I will build the life I dream about through the actions I take today. I am the author of my story, and this chapter begins now."
            </p>
          </div>
          <h3>Go Now</h3>
          <p>
            The world doesn't need more people who understand success—it needs more people who embody it. Close this book. Take one action. Then another. Then another. String enough actions together, and you'll have built a life of meaning, impact, and fulfillment.
          </p>
          <p>
            The path to mastery is before you. Will you walk it?
          </p>
          <div className="quote">
            Your life is your message to the world. Make sure it's inspiring.
          </div>
          <p style={{ textAlign: 'center', marginTop: '50px', fontSize: '1.3em', fontWeight: 'bold', color: '#1e3c72' }}>
            Now go. Build. Become.
          </p>
        </>
      )
    }
  ]

  const progress = (readChapters.size / chapters.length) * 100

  return (
    <div className="book-container">
      <div className="book-header">
        <h1>The Path to Mastery</h1>
        <p>A Comprehensive Guide to Discipline, Focus, Rules & Success</p>
      </div>

      <div className="nav-buttons">
        {chapters.map((chapter, index) => (
          <button
            key={index}
            className={`nav-button ${currentChapter === index ? 'active' : ''}`}
            onClick={() => changeChapter(index)}
          >
            {chapter.title}
          </button>
        ))}
      </div>

      <div className="chapter-content">
        {chapters[currentChapter].content}
      </div>

      <div className="progress-tracker">
        <h4>Your Reading Progress</h4>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}>
            {progress.toFixed(0)}%
          </div>
        </div>
        <p style={{ marginTop: '10px', color: '#666' }}>
          {readChapters.size} of {chapters.length} chapters completed
        </p>
      </div>
    </div>
  )
}
