import Paper from '@mui/material/Paper';
import styled from 'styled-components';

let LeftP = styled.p`
    text-align: left;
`;

function Story() {
    return (
        <Paper elevation={0} className="pretendard-regular" style={{background: "#4796FF", fontSize: "24px", padding: "30px", height: "700px", marginBottom:"30px"}}>
            <div>
                <h1>코딩 천재로 전생했더니 섬의 지배자가 되었다...</h1>
                <br/>
                <LeftP>
                    Martin Kim은 세계적인 연구소에서 천재 프로그래머로 명성을 날리던 인물이었다. 어느 날, 연구소의 비밀 프로젝트를 진행하던 중 의문의 사고로 의식을 잃고 만다. 다시 눈을
                    떴을 때, 그는 전혀 알 수 없는 섬, Martin Island에 떨어져 있었다. 이 섬에는 아무도 없었고, Martin은 오직 자신의 지식과 능력만으로 생존해야 했다.
                </LeftP>

                <LeftP>
                    Martin은 처음엔 절망했지만 곧 프로그래밍 지식을 활용해 섬을 개척해 나가기 시작했다. 그는 C언어 바다를 건너며 기초적인 생존 기술을 익히고, Python 숲에서 자연과
                    조화를 이루는 법을 배웠다. Java 정글에서는 복잡한 문제를 해결하며, 데이터 분석 늪에서는 섬의 자원을 효율적으로 이용하는 방법을 터득했다. 머신러닝 산에서는 자급자족할 수
                    있는 시스템을 구축했고, HTML 동굴에서는 자신만의 안락한 거처를 만들었다.
                </LeftP>

                <LeftP>
                    어느 날, 섬에 새로운 사람들이 도착하기 시작했다. 그들은 Martin이 구축한 시스템과 기술에 경탄하며 그의 도움을 요청했다. Martin은 기꺼이 그들을 도우며, 생존 방법을 가르치고 함께 섬을 더욱 발전시켜 나갔다. 점차 그의 지도력과 지식은 인정받게 되었고, 사람들은
                    Martin Kim을 지도자로 추앙하기 시작했다. Martin은 사람들과 함께 섬을 번영시키며, 섬을 안전하고 풍요로운 곳으로 만들어 갔다. 그의 지식과 리더십은 새로운 문명을 건설하는 데 큰 역할을 했고, 사람들은 Martin Kim을 존경과 감사의 마음으로 따랐다.
                </LeftP>

                <LeftP>
                    이제 Martin Kim은 단순한 생존자가 아니라, Martin Island의 진정한 지배자가 되었다. 과연 그가 이 섬에서 어떤 새로운 도전과 모험을 맞이하게 될 것인가?
                </LeftP>
            </div>
        </Paper>
    );
}

export default Story;
