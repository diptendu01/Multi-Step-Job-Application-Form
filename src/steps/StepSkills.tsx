import { useFormContext, useWatch } from "react-hook-form"
import { useState } from "react"

const POPULAR_SKILLS = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
]

const ALL_SKILLS = [
  ...POPULAR_SKILLS,
  "Next.js",
  "Vue.js",
  "Angular",
  "Redux",
  "Zustand",
  "Express.js",
  "NestJS",
  "Python",
  "Django",
  "Flask",
  "Java",
  "Spring Boot",
  "MongoDB",
  "MySQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Google Cloud",
  "Git",
  "GitHub",
  "Playwright",
  "Jest",
  "Cypress",
  "Vite",
  "Webpack",
]

export default function StepSkills() {
  const { control, setValue } = useFormContext()
  const selected: string[] = useWatch({
    control,
    name: "skills",
    defaultValue: [],
  })

  const [search, setSearch] = useState("")

  const isSearching = search.trim().length > 0

  const visibleSkills = isSearching
    ? ALL_SKILLS.filter((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      )
    : POPULAR_SKILLS

  const toggleSkill = (skill: string) => {
    const updated = selected.includes(skill)
      ? selected.filter((s) => s !== skill)
      : [...selected, skill]

    setValue("skills", updated, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
  }

  return (
    <div className="space-y-4">
      
      <input
        type="text"
        placeholder="Search skills..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input"
      />

      
      {!isSearching && (
        <p className="text-sm text-gray-600">Popular skills</p>
      )}

      
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 gap-3 ${
          !isSearching ? "max-h-[96px] overflow-hidden" : ""
        }`}
      >
        {visibleSkills.map((skill) => {
          const checked = selected.includes(skill)

          return (
            <label
              key={skill}
              className={`cursor-pointer rounded-lg border px-3 py-2 text-center text-sm font-medium transition
                ${
                  checked
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                }`}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={checked}
                onChange={() => toggleSkill(skill)}
              />
              {skill}
            </label>
          )
        })}
      </div>

      
      {!isSearching && (
        <p className="text-xs text-gray-500">
          Use search to find more skills
        </p>
      )}

      
      <p className="text-sm text-gray-600">
        Selected: <strong>{selected.length}</strong>
      </p>
    </div>
  )
}
