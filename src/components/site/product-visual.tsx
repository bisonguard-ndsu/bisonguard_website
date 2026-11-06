"use client";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDot,
  FileText,
  Layers,
  MapPin,
  MessageSquare,
  MousePointer2,
  Pause,
  Play,
  ScanLine,
  Sparkles,
  Video,
  WifiOff,
} from "lucide-react";

function MapPreview() {
  return (
    <figure className="adams-real-preview">
      <div className="preview-toolbar">
        <span>
          <Layers size={14} /> AdAMS inspection workspace
        </span>
        <small>Product interface</small>
      </div>
      <Image
        src="/images/adams-inspection.webp"
        alt="AdAMS survey video and traffic sign inspection records"
        width={1918}
        height={1021}
        sizes="(max-width: 900px) 100vw, 1100px"
        loading="eager"
      />
      <figcaption>
        Survey footage and detected assets, reviewed together. Example project
        data.
      </figcaption>
    </figure>
  );
}
const questions = [
  {
    question: "What needs attention on this road?",
    answer:
      "Start with the condition evidence. Review the distress observations, compare their severity, and identify the segments that need an engineering decision.",
    steps: ["Condition context", "Severity review", "Assessment summary"],
  },
  {
    question: "Help me prepare a maintenance review.",
    answer:
      "Bring the inspection findings into a structured review. Connect each proposed action with its evidence and leave the final priorities with the engineering team.",
    steps: ["Evidence review", "Repair options", "Human review"],
  },
  {
    question: "Turn these findings into a report.",
    answer:
      "Organize the project context, condition observations, and supporting imagery into a clear assessment narrative for the next discussion.",
    steps: ["Project context", "Findings synthesis", "Report outline"],
  },
];
function PavePreview() {
  const [index, setIndex] = useState(0);
  const item = questions[index];
  return (
    <div className="pave-preview">
      <div className="preview-toolbar">
        <span>
          <Sparkles size={14} /> PaveXpert workbench
        </span>
        <small>Guided example</small>
      </div>
      <div className="pave-workspace">
        <aside>
          <span className="tiny-label">Explore a question</span>
          {questions.map((q, i) => (
            <button
              key={q.question}
              type="button"
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
            >
              <MessageSquare size={14} />
              <span>{q.question}</span>
              <ChevronRight size={14} />
            </button>
          ))}
        </aside>
        <div className="pave-conversation" key={index}>
          <div className="pave-question">{item.question}</div>
          <div className="pave-answer">
            <span className="assistant-mark">
              <Sparkles size={17} />
            </span>
            <div>
              <strong>Let’s connect the evidence.</strong>
              <p>{item.answer}</p>
            </div>
          </div>
          <div className="agent-steps">
            {item.steps.map((step, i) => (
              <div key={step} style={{ animationDelay: i * 100 + "ms" }}>
                <Check size={12} />
                <span>{step}</span>
                <span>0{i + 1}</span>
              </div>
            ))}
          </div>
          <div className="pave-review">
            <FileText size={17} />
            <span>Ready for engineering review</span>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
function TrafficPreview({ tmc = false }: { tmc?: boolean }) {
  const [view, setView] = useState(0);
  return (
    <div className="traffic-preview">
      <div className="preview-toolbar">
        <span>
          <Video size={14} />{" "}
          {tmc ? "TMC observation workspace" : "Turnflow study workspace"}
        </span>
        <small>Illustrative scene</small>
      </div>
      <div className="traffic-screen">
        <div className="traffic-camera">
          <Image
            src="/images/intersection.webp"
            fill
            sizes="(max-width:800px) 100vw, 55vw"
            alt="Illustrative intersection used for the traffic workflow"
          />
          <div className="camera-vignette" />
          <span className="camera-label">
            Junction 01 <span>Sample view</span>
          </span>
          {view === 0 ? (
            <svg
              viewBox="0 0 600 450"
              className="traffic-paths"
              aria-hidden="true"
            >
              <path
                className="movement-path one"
                d="M95 240H250Q310 240 310 180V30"
              />
              <path
                className="movement-path two"
                d="M360 430V270Q360 205 430 205H590"
              />
              <path className="movement-path three" d="M0 300H600" />
              <rect x="120" y="190" width="45" height="70" rx="3" />
              <rect x="370" y="290" width="43" height="72" rx="3" />
            </svg>
          ) : (
            <div className="camera-zones">
              <span>Observation zone A</span>
              <span>Observation zone B</span>
            </div>
          )}
          <div className="camera-controls">
            <button
              type="button"
              aria-pressed={view === 0}
              onClick={() => setView(0)}
            >
              {tmc ? "Vehicle layer" : "Movement paths"}
            </button>
            <button
              type="button"
              aria-pressed={view === 1}
              onClick={() => setView(1)}
            >
              Observation zones
            </button>
          </div>
        </div>
        <aside className="traffic-summary">
          <span className="tiny-label">
            {tmc ? "Vehicle composition" : "Movement overview"}
          </span>
          <h4>
            {tmc ? "One place to observe." : "Every movement, in context."}
          </h4>
          <div className="demo-bars">
            {(tmc
              ? ["Passenger vehicles", "Heavy vehicles", "Two-wheelers"]
              : ["North → East", "South → North", "West → East"]
            ).map((label, i) => (
              <div key={label}>
                <span>{label}</span>
                <div>
                  <i
                    style={{
                      width: [78, 49, 64][i] + "%",
                      animationDelay: i * 120 + "ms",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="traffic-summary-note">
            <Check size={14} />
            <span>
              {tmc ? "Capture · Review · Report" : "Define · Count · Review"}
            </span>
          </div>
          <small>Illustrative data, not a live study</small>
        </aside>
      </div>
    </div>
  );
}
function BisonPreview() {
  const [layer, setLayer] = useState(true);
  return (
    <div className="bison-preview">
      <div className="preview-toolbar">
        <span>
          <ScanLine size={14} /> BisonGuard field view
        </span>
        <small>Illustrative detection layer</small>
      </div>
      <div className="bison-scene">
        <svg
          className="bison-capture"
          viewBox="0 0 1170 763"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-label="Bison herd in an open field with an optional illustrative detection layer"
        >
          <image
            href="/images/bisonguard-herd.webp"
            width="1170"
            height="763"
          />
          {layer && (
            <g className="herd-detection-layer">
              <rect
                className="herd-detection"
                x="20"
                y="350"
                width="425"
                height="272"
              />
              <rect
                className="herd-detection"
                x="682"
                y="393"
                width="121"
                height="99"
              />
              <rect
                className="herd-label-bg"
                x="682"
                y="369"
                width="100"
                height="24"
              />
              <text className="herd-label" x="690" y="386">
                Observation
              </text>
            </g>
          )}
        </svg>
        <div className="bison-shade" />
        <div className="bison-overlay">
          <span className="tiny-label">
            A different landscape. The same curiosity.
          </span>
          <h4>
            Closer to the life
            <br />
            in the field.
          </h4>
          <button
            type="button"
            aria-pressed={layer}
            onClick={() => setLayer(!layer)}
          >
            <Layers size={15} />
            {layer ? "Hide example detections" : "Show example detections"}
          </button>
        </div>
      </div>
    </div>
  );
}
function FieldPreview() {
  const [step, setStep] = useState(0);
  return (
    <div className="field-preview">
      <div className="preview-toolbar">
        <span>
          <MapPin size={14} /> RoadLogger field workflow
        </span>
        <small>Example inspection</small>
      </div>
      <div className="field-workspace">
        <div className="demo-phone">
          <div className="phone-top">
            <span>RoadLogger</span>
            <WifiOff size={13} />
          </div>
          <div className="phone-image">
            <Image
              src="/images/field-inspection.webp"
              fill
              sizes="230px"
              alt="Illustrative inspection scene"
            />
          </div>
          <div className="phone-content">
            <span className="tiny-label">Case RL-014 · Example</span>
            <h4>
              {
                [
                  "Roadside asset",
                  "Follow-up inspection",
                  "Repair verification",
                ][step]
              }
            </h4>
            <span className="mini-status">
              {["Open for review", "Monitoring", "Resolved"][step]}
            </span>
            <dl>
              <div>
                <dt>Location</dt>
                <dd>North corridor</dd>
              </div>
              <div>
                <dt>Evidence</dt>
                <dd>Photos & notes</dd>
              </div>
              <div>
                <dt>Sync</dt>
                <dd>Saved on device</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="field-steps">
          <span className="tiny-label">One case. A complete history.</span>
          <h4>Keep the next visit connected to the last.</h4>
          {[
            "Capture the observation",
            "Record a follow-up",
            "Verify the work",
          ].map((label, i) => (
            <button
              key={label}
              type="button"
              aria-pressed={step === i}
              onClick={() => setStep(i)}
            >
              <span>0{i + 1}</span>
              <div>
                <strong>{label}</strong>
                <small>
                  {
                    [
                      "Location, condition, and evidence",
                      "Changes, measurements, and notes",
                      "Resolution with supporting evidence",
                    ][i]
                  }
                </small>
              </div>
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
function AnnotatePreview() {
  const [labels, setLabels] = useState(true);
  return (
    <div className="annotate-preview">
      <div className="preview-toolbar">
        <span>
          <MousePointer2 size={14} /> AdAMS Annotate review studio
        </span>
        <small>Illustrative annotation workflow</small>
      </div>
      <div className="annotation-stage">
        <Image
          src="/images/adams-inspection.webp"
          alt="AdAMS roadside inspection example"
          fill
          sizes="(max-width:800px) 100vw, 70vw"
        />
        {labels && (
          <div className="annotation-callout">
            <Check size={15} />
            <span>Review the label. Keep the evidence.</span>
          </div>
        )}
        <div className="annotation-tools">
          <span>
            <MousePointer2 size={18} />
          </span>
          <span>
            <ScanLine size={18} />
          </span>
          <span>
            <Layers size={18} />
          </span>
        </div>
      </div>
      <div className="annotation-bottom">
        <button
          type="button"
          aria-pressed={labels}
          onClick={() => setLabels(!labels)}
        >
          {labels ? "Hide review layer" : "Show review layer"}
        </button>
        <span>
          Upload <ChevronRight size={12} /> Prelabel <ChevronRight size={12} />{" "}
          Review <ChevronRight size={12} /> Export
        </span>
      </div>
    </div>
  );
}
export function ProductVisual({
  slug,
  compact = false,
}: {
  slug: string;
  compact?: boolean;
}) {
  const [paused, setPaused] = useState(false);
  return (
    <div
      className={"product-visual " + (compact ? "is-compact" : "")}
      data-paused={paused}
    >
      {slug === "adams" ? (
        <MapPreview />
      ) : slug === "pavexpert" ? (
        <PavePreview />
      ) : slug === "tmc" || slug === "turnflow" ? (
        <TrafficPreview tmc={slug === "tmc"} />
      ) : slug === "bisonguard" ? (
        <BisonPreview />
      ) : slug === "roadlogger" ? (
        <FieldPreview />
      ) : (
        <AnnotatePreview />
      )}
      <div className="visual-footnote">
        <span>
          <CircleDot size={11} /> Interactive illustration · Sample content
        </span>
        <span className="motion-preference">Reduced motion enabled</span>
        <button
          type="button"
          onClick={() => setPaused(!paused)}
          aria-label={
            paused ? "Play illustration motion" : "Pause illustration motion"
          }
        >
          {paused ? <Play size={12} /> : <Pause size={12} />}
          <span>{paused ? "Play motion" : "Pause motion"}</span>
        </button>
      </div>
    </div>
  );
}
