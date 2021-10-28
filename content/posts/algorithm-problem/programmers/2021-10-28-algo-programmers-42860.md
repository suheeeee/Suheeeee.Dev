---
title: "[알고문풀] 프로그래머스 : 섬 연결하기"
date: "2021-10-28T11:48:32.169Z"
template: "post"
draft: false
slug: "programmers-42861"
category: "알고문풀"
tags:
  - "알고리즘 문제풀이"
  - "프로그래머스"
  - "greedy"
description: "알고리즘 문제풀이 : 프로그래머스/섬 연결하기/42861"
---

### 문제주소
> https://programmers.co.kr/learn/courses/30/lessons/42861


### 문제접근 방식

minimum spanning tree

### Solution
#### JavaScript
```javascript
// minimum spanning tree
function solution(n, costs) {
  let answer = 0

  let group = []
  let visited = {}
  let cnt = 0

  costs.sort((a,b) => a[2] - b[2])

  let i = 0
  while(costs.length > i && n - 1 > cnt ){
    let isVisited0 = visited[costs[i][0]] ? true : false
    let isVisited1 = visited[costs[i][1]] ? true : false

    if(isVisited0 && isVisited1){
      // s, d visited -> group check
      let groupNum = [-1, -1]
      for(let j = 0 ; j < group.length; j++){
        if(groupNum[0] == -1)
          groupNum[0] = group[j].indexOf(costs[i][0]) > -1 ? j : -1

        if(groupNum[1] == -1)
          groupNum[1] = group[j].indexOf(costs[i][1]) > -1 ? j : -1

        if(groupNum[0] != -1 && groupNum[1] != -1)
          break;
      }

      // 1. same group -> continue
      if(groupNum[0] == groupNum[1]) {
        i++
        continue
      }

      // 2. diff group -> union group, cnt ++, answer += cost
      group[groupNum[0]] = group[groupNum[0]].concat(group[groupNum[1]])
      group.splice(groupNum[1], 1)

    }
    else if(isVisited0){
      // s visited

      // add d to visited
      visited[costs[i][1]] = true

      // add d to group
      group.some(g => {
        if(g.indexOf(costs[i][0]) > -1){
          g.push(costs[i][1])
          return true
        }
        return false
      })
    }
    else if(isVisited1){
      // d visited

      // add s to visited
      visited[costs[i][0]] = true

      // add s to group
      group.some(g => {
        if(g.indexOf(costs[i][1]) > -1){
          g.push(costs[i][0])
          return true
        }
        return false
      })
    }
    else {
      // not visited s, d

      // add s and d to visited
      visited[costs[i][0]] = true
      visited[costs[i][1]] = true

      // add new group
      group.push([costs[i][0], costs[i][1]])
    }

    answer += costs[i][2]
    i++
    cnt ++
  }

  return answer;
}
```

<br>
<br>
