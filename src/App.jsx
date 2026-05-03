export default function App() {
  return (
    <main
      style={{
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        maxWidth: 720,
        margin: "0 auto",
        padding: "48px 24px",
        lineHeight: 1.6,
        color: "#111",
      }}
    >
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>CometChat × Replit</h1>
      <p style={{ fontSize: 18, color: "#444", marginTop: 0 }}>
        This is a blank React + Vite app with CometChat skills pre-installed.
        Ask Replit Agent to add chat — it already knows how.
      </p>

      <section style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 20 }}>Try this</h2>
        <p>Open the Replit Agent panel and ask:</p>
        <pre
          style={{
            background: "#f4f4f5",
            padding: 16,
            borderRadius: 8,
            fontSize: 15,
          }}
        >
          add chat to my app
        </pre>
        <p>
          The Agent reads <code>.agents/skills/cometchat/SKILL.md</code>,
          detects the framework, asks 4–5 setup questions, and writes a working
          chat integration into <code>src/</code>.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 20 }}>What CometChat ships</h2>
        <ul>
          <li>
            <strong>Conversations list, message thread, composer</strong> — drop-in
            React components that handle real-time messaging out of the box.
          </li>
          <li>
            <strong>40+ features</strong> — calls, polls, reactions, smart replies,
            translations, AI agents, file sharing, presence.
          </li>
          <li>
            <strong>5 theme presets</strong> — Slack, WhatsApp, iMessage, Discord,
            Notion. Or your own brand color.
          </li>
        </ul>
      </section>

      <section style={{ marginTop: 32, fontSize: 14, color: "#666" }}>
        <p>
          New to CometChat?{" "}
          <a
            href="https://www.cometchat.com/docs"
            target="_blank"
            rel="noreferrer"
          >
            cometchat.com/docs
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/cometchat/cometchat-skills"
            target="_blank"
            rel="noreferrer"
          >
            skills repo
          </a>
        </p>
      </section>
    </main>
  );
}
