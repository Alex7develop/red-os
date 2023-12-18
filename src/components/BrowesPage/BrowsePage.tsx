import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, selectData } from '../../features/dataSlice';
import { selectIsAuthenticated } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';
import TreeView from '../TreeView/TreeView';
import ChildrenView from '../ChildrenView/ChildrenView';
import { Node } from '../../types/Node';
import styles from './BrowsePage.module.css';

const BrowsePage: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated: boolean = useSelector(selectIsAuthenticated);
  const data: Node[] = useSelector(selectData);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataAsync = async () => {
      if (isAuthenticated) {
        await dispatch(fetchData());
      } else {
        navigate('/login');
      }
    };

    fetchDataAsync();
  }, [dispatch, isAuthenticated, navigate]);

  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const handleNodeToggle = (_nodePath: string[], node: Node) => {
    setSelectedNode(node);
  };

  const handleNodeClick = (node: Node) => {
    setSelectedNode(node);
  };

  return (
    <div>
      <h2 className={styles.heading}>Страница с информацией</h2>
      <div className={styles.container}>
        <div className={styles.treeView}>
          <h3>Родительские элементы</h3>
          <TreeView
            treeData={data.find((item) => item.key === '_')?.children || []}
            onNodeToggle={handleNodeToggle}
          />
        </div>
        <div className={styles.childrenView}>
          <h3>Дочерние элементы</h3>
          <ChildrenView selectedNode={selectedNode} onNodeClick={handleNodeClick} />
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
