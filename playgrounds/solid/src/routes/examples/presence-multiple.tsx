import { createSignal, Show } from "solid-js"
import { Motion, Presence } from "../../../../../packages/solid/src"

import "./presence.css"

export default function PresenceInitial() {
  const [toggle, setToggle] = createSignal(false)
  return (
    <div class="container">
      <button onClick={() => setToggle(!toggle())}>
        {toggle() === true ? "Hide" : "Show"}
      </button>
      <Presence>
        <Show when={toggle()}>
          <Motion.Div
            class="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Motion.Div
              class="box smaller"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Motion.Div>
        </Show>
      </Presence>
    </div>
  )
}
