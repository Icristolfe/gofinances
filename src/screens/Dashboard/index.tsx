import React from 'react'
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  User,
  UserGreeting,
  UserName,
  Photo,
} from './style'

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://github.com/Icristolfe.png' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Cristolfe</UserName>
            </User>
          </UserInfo>
        </UserWrapper>
       
      </Header>
    </Container>
  )
}
