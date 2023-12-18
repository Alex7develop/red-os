import React, { useState, useEffect } from 'react';
import { Node } from '../../types/Node';
import styles from './TreeView.module.css';

interface TreeViewProps {
  treeData: Node[];
  onNodeToggle: (nodePath: string[], node: Node) => void;
}

const TreeView: React.FC<TreeViewProps> = ({ treeData, onNodeToggle }) => {
  const [expandedPaths, setExpandedPaths] = useState<string[]>([]);
  const [clickedNode, setClickedNode] = useState<Node | null>(null);

  const handleNodeToggle = (nodePath: string[], node: Node) => {
    setClickedNode(node);
    setExpandedPaths((prevPaths) => {
      const index = prevPaths.findIndex((path) => nodePath.join('-') === path);

      if (index !== -1) {
        return prevPaths.slice(0, index);
      }
      return [...prevPaths, nodePath.join('-')];
    });
  };

  useEffect(() => {
    if (clickedNode) {
      onNodeToggle([], clickedNode);
    }
  }, [clickedNode, onNodeToggle]);

  const renderTree = (tree: Node[], path: string[] = []): JSX.Element => (
    <ul className={styles.treeContainer}>
      {tree
        .filter((node) => node.children !== undefined)
        .map((node: Node) => {
          const nodePath = [...path, node.key];
          const hasChildren =
            node.children !== undefined && node.children.length > 0;

          return (
            <li key={node.key} className={styles.treeItem}>
              <span className={styles.treeNode} onClick={() => handleNodeToggle(nodePath, node)}>
                {node.name}
                {hasChildren && (
                  <span className={styles.nodeToggle}>
                    {' '}
                    {expandedPaths.some((path) => nodePath.join('-') === path)
                      ? '[-]'
                      : '[+]'}
                  </span>
                )}
              </span>
              {hasChildren &&
              expandedPaths.some((path) => nodePath.join('-') === path)
                ? renderTree(node.children!, nodePath)
                : null}
            </li>
          );
        })}
    </ul>
  );

  return <div>{renderTree(treeData)}</div>;
};

export default TreeView;
