import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color:white;
`;
export const HeaderArea = styled.View`
    width:100%;
    height:22%;
    justify-content:center;
    align-items:center;
    background-color: #7EC576;
    margin-bottom:16px;
`;
export const Title = styled.Text`
    text-transform:uppercase;
    font-size:18px;
    color:white;
    font-weight: ${props=>props.bold ? 'bold': 'normal'};
`;
export const InputArea = styled.View`
    width:90%;
    height:36px;
    margin:16px;
    flex-direction:row;
    align-items:center;
`;
export const Input = styled.TextInput`
    border-width:1px;
    border-color: gray;
    border-radius:16px;
    flex:1;
    padding: 8px 16px;
`;
export const ButtonAdd = styled.TouchableOpacity`
    width:32px;
    height:32px;
    border-radius:16px;
    border-width:2px;
    border-color: #87BCFF;
    justify-content:center;
    align-items: center;
    margin-left:8px;
`;
export const ButtonAddText = styled.Text`
    color:#87BCFF;
    font-size:12px;
`;
export const LevelTask = styled.View`
    width:90%;
    height:36px;
    margin:16px;
    flex-direction:row;
    background-color:#CCC;
    padding:2px;
    border-radius:16px;
`;
export const LevelItem = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items:center;
    background-color: ${props=>props.active ? 'white': 'transparent'};
    border-radius:16px;
`;
export const LevelItemText = styled.Text`
    font-size:12px;
    color:black;
`;
export const ListTask = styled.ScrollView``;
export const ListItem = styled.View`
    width:90%;
    margin:18px;
    padding:0px 16px;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;
export const TaskName = styled.Text`
    font-size:18px;
    color:black;
`;
export const TaskLevel = styled.View`
    width:24px;
    height:24px;
    background-color: ${props=>props.level === 'Low' ? 'yellow': props.level === 'Medium' ? 'orange' : 'red'};
`;