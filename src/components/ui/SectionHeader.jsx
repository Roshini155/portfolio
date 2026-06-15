export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-14 text-center">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle mx-auto">{subtitle}</p>}
    </div>
  )
}
