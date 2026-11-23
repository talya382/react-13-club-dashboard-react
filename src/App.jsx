
import { initialMembers, initialTasks } from './data.js'
import styles from './App.module.css'
import Header from './components/Header/Header.jsx'
import FilterBar from './components/FilterBar/FilterBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { useState } from 'react'
import MembersList from './components/MembersList/MembersList.jsx'
import Notice from './components/Notice/Notice.jsx'
import TasksPanel from './components/TasksPanel/TasksPanel.jsx'

export default function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [selectedMemberId, setSelectedMemberId] = useState(null)
  const [layout, setLeyOut] = useState('list')
  const [showOnlyActive, setShowOnlyActive] = useState(false)
  const [members, setMembers] = useState(initialMembers)

  const onToggleActive = () => {
    setShowOnlyActive((prev) => !prev)
  }

  const onLayoutChange = (layout) => {
    setLeyOut(layout)
  }

  const onSelect = (memberId) => {
    setSelectedMemberId(memberId)
  }

  const onToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, done: !task.done }
          : task
      )
    )
  }


  const displayedMembers = showOnlyActive
    ? members.filter((member) => member.isActive)
    : members

  const selectedMember = members.find((member) => {
    return member.id === selectedMemberId
  })

  const selectedTasks = tasks.filter((task) => {
    return task.assignedTo === selectedMemberId
  })

 return (
  <div className={styles.app}>
    <Header />

    <FilterBar
      showOnlyActive={showOnlyActive}
      onToggleActive={onToggleActive}
      onLayoutChange={onLayoutChange}
      layout={layout}
    />

    {selectedMember && !selectedMember.isActive && (
      <Notice type="warning">
        This member is inactive
      </Notice>
    )}

    <MembersList
      members={displayedMembers}
      layout={layout}
      selectedMemberId={selectedMemberId}
      onSelect={onSelect}
    />

    <TasksPanel
      member={selectedMember}
      tasks={selectedTasks}
      onToggleTask={onToggleTask}
    />

    <Footer />
  </div>
)}