import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SortButton from '../SortButton/SortButton';
import { Node } from '../../types/Node';
import styles from './ChildrenView.module.css';

interface ChildrenViewProps {
  selectedNode: Node | null;
  onNodeClick: (node: Node) => void;
}

const ChildrenView: React.FC<ChildrenViewProps> = ({ selectedNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortedChildren, setSortedChildren] = useState<Node[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    if (selectedNode && selectedNode.children) {
      setSortedChildren([...selectedNode.children]);
    } else {
      setSortedChildren([]);
    }
  }, [selectedNode]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const filteredAndSortedChildren = sortedChildren
    .filter((child) =>
      child.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div className={styles.childrenContainer}>
      <p className={styles.selectedParent}>
        Выбранный родитель: {selectedNode?.name}
      </p>
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      <SortButton sortOrder={sortOrder} onClick={toggleSortOrder} />
      <ul className={styles.childList}>
        {filteredAndSortedChildren.map((child: Node) => (
          <li key={child.key} className={styles.childItem}>
            <span>{child.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildrenView;
