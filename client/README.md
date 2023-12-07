# OPGG

### - Deploy URL
http://opgg-bucket.s3-website.ap-northeast-2.amazonaws.com/

<br>

### - Skills
```
React, Redux, Redux-thunk, React-intersection-observer, Styled-components ...
```

<br>

## # 실행 방법

### - Clone repository
```
git clone https://github.com/seungdeng17/opgg.git
```

### - Install dependencies
```
npm install
```

### - Run project
```
npm start
```

<br>

<hr>

<br>

## # Components Tree

```
components
│  Main.jsx
│
├─common
│      Loading.jsx
│      Tabs.jsx
│      ToolTip.jsx
│
├─etc
│      NoResult.jsx
│
├─header
│      FavoritesList.jsx
│      Header.jsx
│      HistoryList.jsx
│      SearchAutoComplete.jsx
│      SearchForm.jsx
│      SearchFormModal.jsx
│      SearchHistory.jsx
│
└─summoner
    ├─match
    │  │  Match.jsx
    │  │  MatchFilter.jsx
    │  │
    │  ├─matchList
    │  │      GameSettingInfo.jsx
    │  │      GameStats.jsx
    │  │      Item.jsx
    │  │      ItemsInfo.jsx
    │  │      KDAInfo.jsx
    │  │      MatchBox.jsx
    │  │      MatchList.jsx
    │  │      MoreInfoButton.jsx
    │  │      PlayerNames.jsx
    │  │      StatsInfo.jsx
    │  │
    │  └─matchSummary
    │          ChampionsInfo.jsx
    │          DoughnutGraph.jsx
    │          EmptyChampionInfo.jsx
    │          MatchSummary.jsx
    │          PositionsInfo.jsx
    │          SummaryInfo.jsx
    │
    ├─profile
    │      PreviousTiers.jsx
    │      Profile.jsx
    │      ProfileImg.jsx
    │      ProfileInfo.jsx
    │
    ├─rank
    │      Rank.jsx
    │      Solo.jsx
    │      Team.jsx
    │
    └─winRate
            ChampWinRate.jsx
            RecentWinRate.jsx
            WinRate.jsx
```

<br>

<hr>

<br>

## # UI & 기능 구현

- **랜딩 페이지**
<br>

![image](https://user-images.githubusercontent.com/58316983/89301987-3d9f0100-d6a5-11ea-99ee-8ef3b6b4e5b1.png)

<br>

- **전적 조회 페이지**
<br>

![image](https://user-images.githubusercontent.com/58316983/89302212-83f46000-d6a5-11ea-8ccf-a7c3e23cf851.png)

<br>

- **자동완성**
<br>

![image](https://user-images.githubusercontent.com/58316983/89302979-80ada400-d6a6-11ea-8e8f-d70499cc380d.png)

<br>

- **최근검색**
<br>

![image](https://user-images.githubusercontent.com/58316983/89524746-13be1980-d820-11ea-91be-3bbfb556565d.png)

<br>

- **즐겨찾기**
<br>

![image](https://user-images.githubusercontent.com/58316983/89524804-29334380-d820-11ea-83f8-e0bc835a2e73.png)
![image](https://user-images.githubusercontent.com/58316983/89302761-35939100-d6a6-11ea-82b9-52bbfd9749fc.png)

<br>

- **챔피언 승률**
<br>

![image](https://user-images.githubusercontent.com/58316983/89304167-1695fe80-d6a8-11ea-9abc-5f2e91ec12bb.png)

<br>

- **7일간 랭크 승률**
<br>

![image](https://user-images.githubusercontent.com/58316983/89304278-39281780-d6a8-11ea-8829-f28523c641f6.png)

<br>

- **전적 요약**
<br>

![image](https://user-images.githubusercontent.com/58316983/89304463-6a084c80-d6a8-11ea-98be-c37444d64f4e.png)

<br>

- **승리, 패배, 다시하기 전적**
<br>

![image](https://user-images.githubusercontent.com/58316983/89305261-67f2bd80-d6a9-11ea-829b-8f544bcbdc77.png)
![image](https://user-images.githubusercontent.com/58316983/89305333-7a6cf700-d6a9-11ea-9907-13f967247e6b.png)
![image](https://user-images.githubusercontent.com/58316983/89305545-bc963880-d6a9-11ea-8deb-6fbdebccfd61.png)

<br>

- **아이템 툴팁**
<br>

![image](https://user-images.githubusercontent.com/58316983/89305718-f7986c00-d6a9-11ea-9d06-a2355831146c.png)

<br>
