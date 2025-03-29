import * as S from './style';

const SearchBar = () => {
    return (
        <S.Container>
            <S.SearchBarContainer>
                <S.InputContainer>
                    <S.Text>모트리에서 궁금한 주제를 검색해보세요!</S.Text>
                    <input type="text" placeholder='검색어를 입력하세요'/>
                </S.InputContainer>
            </S.SearchBarContainer>
        </S.Container>
    );
};

export default SearchBar;