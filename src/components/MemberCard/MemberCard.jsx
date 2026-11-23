// MemberCard - avatar (initials), name, role badge and a small role-colored action button.
import styles from './MemberCard.module.css'

/**
 * @param {object} props
 * @param {{id: number, name: string, role: "Leader" | "Member" | "Guest", isActive: boolean}} props.member
 * @param {boolean} props.isSelected - true when this is the selected member (the card gets styles.selected)
 * @param {(memberId: number) => void} props.onSelect - call it with member.id when the card is clicked
 */
export default function MemberCard({ member, isSelected, onSelect }) {
  // TODO: avatar with the initials ("Noa Levi" -> "NL")
  // TODO: name + role badge
  // TODO: button colored by role (Leader=blue, Member=green, Guest=purple), disabled if inactive
  // TODO: inactive member -> the card also gets styles.inactive (faded)
 const splitName = member.name.split(' ')
const let1 = splitName[0][0]
const let2 = splitName[1][0]
const avatar = let1 + let2

  return (
    <div
      onClick={() => onSelect(member.id)}
      className={`${styles.card} ${!member.isActive ? styles.inactive : ''} ${isSelected ? styles.selected : ''}`}
    >
      <div className={styles.avatar}>{avatar}</div>

      <h2 className={styles.name}>{member.name}</h2>

      <h3 className={styles.badge}>{member.role}</h3>

      <button
        disabled={!member.isActive}
        className={`${styles.roleButton} ${styles[member.role.toLowerCase()]}`}
      >
        Contact
      </button>
    </div>
  )
}
