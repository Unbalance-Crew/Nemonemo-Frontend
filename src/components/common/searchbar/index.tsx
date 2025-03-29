import * as S from './style';

const SearchBar = () => {
    return (
        <S.Container>
            <S.SearchBarContainer>
                <S.Text>원하는 메이데이 주제를 검색해보세요!</S.Text>
                <S.InputContainer>
                    <input type="text" placeholder='검색어를 입력하세요'/>
                </S.InputContainer>
            </S.SearchBarContainer>
        </S.Container>
    );
};

export default SearchBar;