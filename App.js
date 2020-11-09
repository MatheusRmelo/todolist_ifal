import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Container,
  HeaderArea,
  Title,
  InputArea,
  Input,
  ButtonAdd,
  ButtonAddText,
  LevelTask,
  LevelItem,
  LevelItemText,
  ListTask,
  ListItem,
  TaskName,
  TaskLevel
} from './styles';

import { Keyboard } from 'react-native';


export default function App() {
  const [tasks, setTasks] = useState([
    {name: 'Play Tennis', level: 'High'},
    {name: 'Study English', level: 'Medium'},
    {name: 'Go Surfing', level: 'Low'},
  ]);
  const [active, setActive] = useState('Low');
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    let newList = [...tasks];
    newList.push({name: task, level: active});
    setTasks(newList);
    setTask('');
    Keyboard.dismiss();
  }

  return (
    <Container>
      <StatusBar style="auto" />
      <HeaderArea>
        <Title>TODO <Title bold>List</Title></Title>
      </HeaderArea>
      <InputArea>
        <Input placeholder="Digite sua próxima tarefa" value={task} onChangeText={t=>setTask(t)} />
        <ButtonAdd onPress={handleAddTask}>
          <ButtonAddText>+</ButtonAddText>
        </ButtonAdd>
      </InputArea>
      <LevelTask>
        <LevelItem onPress={()=>setActive('Low')} active={active === 'Low' ? true : false }>
          <LevelItemText>Low</LevelItemText>
        </LevelItem>
        <LevelItem onPress={()=>setActive('Medium')} active={active === 'Medium' ? true : false }>
          <LevelItemText>Medium</LevelItemText>
        </LevelItem>
        <LevelItem onPress={()=>setActive('High')} active={active === 'High' ? true : false }>
          <LevelItemText>High</LevelItemText>
        </LevelItem>
      </LevelTask>
      <ListTask showsVerticalScrollIndicator={false}>
        {
          tasks.map((item, key)=>(
            <ListItem key={key}>
              <TaskName>{item.name}</TaskName>
              <TaskLevel level={item.level} />
            </ListItem>
          ))
        }
      </ListTask>
    </Container>
  );
}