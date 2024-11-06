import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./ROSA.css";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import NavBar from "../../../../../components/NavBar/NavBar";
import Footer from "../../../../../components/Footer/Footer";

import Disparidade from "../../../../../assets/images/python/disparity.jpeg";
import Rosa from "../../../../../assets/images/python/image.png";
import Imx from "../../../../../assets/images/python/image 1.png";
import JetsonNano from "../../../../../assets/images/python/image 2.png";
import OpencvImage from "../../../../../assets/images/python/image 4.png";
import ExempleDisparity from "../../../../../assets/images/python/image 3.png";

const ROSA = () => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const codeRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkMode", newDarkModeState.toString());
  };

  const copyToClipboard = () => {
    if (codeRef.current) {
      const code = codeRef.current.innerText;
      navigator.clipboard.writeText(code).then(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      });
    }
  };

  const toggleCodeVisibility = () => {
    setIsCodeVisible((prev) => !prev);
  };

  return (
    <div className={`rosapage-container ${isDarkMode ? "dark-mode-rosa" : ""}`}>
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div>
        <Link to={"/python"} className="back-icon" style={{color: 'white'}}>
          <FaArrowLeft />
        </Link>
      </div>
      <img
        className="image-opencv"
        src={Disparidade}
        alt="exemplo de disparidade de imagem"
        width="100%"
      />
      <div className="rosa-page">
        <h4>
          Uma Interface de Visão Estereoscópica Binocular para Reconhecimento de
          Humanos e Objetos para Robôs Socialmente Assistivos
        </h4>
        <p>
          O reconhecimento e a localização de pessoas e objetos em um cenário é
          essencial para a robótica móvel. Estas funcionalidades auxiliam no
          planejamento da execução de trajetórias desses dispositivos, evitando
          colisões com obstáculos. Na Robótica Socialmente Assistiva, o
          reconhecimento e rastreamento de pessoas também são necessários para o
          processo de interação entre humano e robô. Uma das formas para
          possibilitar estes recursos é através da visão estereoscópica. A visão
          estéreo permite obter informações de profundidade através do
          processamento de imagens de duas ou mais câmeras. Assim, é possível
          estimar a localização de pessoas e objetos em determinado cenário.
          Desse modo, este projeto visa desenvolver uma interface de visão
          estereoscópica através de duas câmeras para identificar e determinar a
          localização de objetos e pessoas em um determinado cenário. Este
          projeto faz parte do esforço para a construção de um dispositivo
          robótico socialmente assistivo denominado de ROSA (RObô Socialmente
          Assistivo).
        </p>
        <img src={Rosa} alt="descrição do robô ROSA" className="img-rosa" />
        <nav className="custom-nav-rosa">
          <h2 className="nav-title-rosa">Sumário</h2>
          <ul className="nav-list">
            <li>
              <a className="nav-link" href="#recursos">
                Recursos e Materiais
              </a>
            </li>
            <li>
              <a className="nav-link" href="#teorias">
                Teorias e Codigos
              </a>
              <ul className="sub-list">
                <li>
                  <a className="sub-link" href="#calibracao">
                    Calibração
                  </a>
                </li>
                <li>
                  <a className="sub-link" href="#disparidade">
                    Mapas de Disparidade
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <hr className="hr hr-blurry" />
        <section>
          <h2 id="recursos">Recursos e Materiais</h2>
          <ul>
            <li>
              Câmera estéreo (ver Figura R). O dispositivo IMX219 da fabricante
              Waveshare apresenta duas câmeras integradas para visão
              estereoscópica. Cada câmera apresenta 8 Megapixels. Ela utiliza a
              interface MIPI CSI-2. Além disso, ela apresenta dimensões
              reduzidas (24mm x 85mm) e vem integrado a um conjunto de sensores
              de posição e direção (acelerômetro, giroscópio e magnetômetro)
              (https://www.waveshare.com/imx219-83-stereo-camera.htm).
            </li>
            <img
              src={Imx}
              alt="Camera imx219 da waveshare"
              className="img-rosa"
            ></img>
            <p style={{ fontSize: "10px" }}>
              Figura R. Câmera estéreo IMX219 da Waveshare. Fonte:
              <a href="https://www.waveshare.com/imx219-83-stereo-camera.htm">
                https://www.waveshare.com/imx219-83-stereo-camera.htm
              </a>
            </p>

            <li>
              Unidade de processamento embarcável (ver Figura S). O Dispositivo
              denominado Kit Desenvolvedor Jetson Nano 4GB já vem integrado a
              uma Inteligência Artificial (IA) chamada NVIDIA JetPack SDK. Essa
              IA é própria para processamento de imagens. O processamento de
              determinar a profundidade e localização de pessoas e objetos será
              realizado neste dispositivo.
            </li>
            <img
              src={JetsonNano}
              alt="Jetson Nano Nvidia"
              className="img-rosa"
            />
            <p style={{ fontSize: "10px" }}>
              Figura S. Unidade de processamento Kid Desenvolvedor Jetson Nano
              4GB. Fonte:{" "}
              <a href="https://www.waveshare.com/imx219-83-stereo-camera.htm">
                https://nvidiastore.com.br
              </a>
            </p>
            <li>
              OpenCV. Biblioteca de software livre que apresenta um conjunto de
              recursos algorítmicos para processamento de visão computacional
              (OPENCV, 2022).
            </li>
            <img src={OpencvImage} alt="" className="img-rosa" />
          </ul>
          <h2 id="teorias">Teorias e Códigos</h2>
          <h4 id="calibracao">Calibração</h4>
          <p>
            A calibração de câmera é um processo fundamental em visão
            computacional e processamento de imagens, que envolve estimar os
            parâmetros intrínsecos e extrínsecos da câmera. Esses parâmetros
            descrevem as propriedades geométricas da câmera, como distorção,
            foco, rotação e translação.
            <br />
            <br />O código abaixo implementa o processo de calibração de câmeras
            estéreo e retificação utilizando o OpenCV e algumas imagens de um
            tabuleiro de xadrez 8x6 impresso em folha A4. O propósito principal
            é alinhar duas câmeras de forma que as imagens capturadas por elas
            possam ser usadas para criar uma visão estéreo, possibilitando a
            percepção de profundidade.
            <br />
          </p>
          <br />
          <ol>
            <li>
              <h6>Definição dos parâmetros iniciais</h6>
              <div className="code-container">
                <button className="copy-button" onClick={copyToClipboard}>
                  Copy
                </button>
                <pre className="code-block" ref={codeRef}>
                  <code>
                    {`chessboardSize = (8,6)
frameSize = (480 , 640)
criteria = (cv.TERM_CRITERIA_EPS + cv.TERM_CRITERIA_MAX_ITER, 30, 0.001)`}
                  </code>
                </pre>
                {showNotification && (
                  <div className="notification">
                    Código copiado para a área de transferência!
                  </div>
                )}
              </div>
            </li>
          </ol>
          <ul>
            <li>
              <strong>chessboardSize</strong>: Define o tamanho do tabuleiro de
              xadrez utilizado para a calibração (8 quadrados na largura e 6 na
              altura).
            </li>
            <li>
              <strong>frameSize</strong>: Define o tamanho do frame (imagem)
              para cada uma das câmeras.
            </li>
            <li>
              <strong>criteria</strong>: Define o critério de parada do
              refinamento da localização dos cantos do tabuleiro de xadrez
              (usado para ajustar os cantos com precisão sub-pixel).
            </li>
          </ul>
          <h6>Criação dos pontos 3D para o tabuleiro de xadrez</h6>
          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                {`objp = np.zeros((chessboardSize[0] * chessboardSize[1], 3), np.float32)
objp[:,:2] = np.mgrid[0:chessboardSize[0],0:chessboardSize[1]].T.reshape(-1,2)
objp = objp * 24`}
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>
          <ul>
            <li>
              <strong>objp</strong>: Cria uma matriz de zeros que vai armazenar
              as coordenadas dos pontos 3D dos cantos do tabuleiro. Os primeiros
              dois valores (x, y) são preenchidos com as coordenadas dos pontos
              2D em uma grade. O valor 24 multiplica os pontos para ajustar as
              coordenadas reais dos quadrados do tabuleiro (tamanho do lado do
              quadrado em milímetros).
            </li>
          </ul>
          <h6>Carregamento das imagens</h6>
          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                imagesLeft = glob.glob('/camera1/*.jpg') (<br />
                imagesRight = glob.glob('/camera0/*jpg')
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>
          <h6>Retificação estéreo</h6>
          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                rectL, rectR, projMatrixL, projMatrixR, Q, roi_L, roi_R =
                cv.stereoRectify(...)
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>
          <ul>
            <li>
              <strong>cv.stereoRectify</strong>: Alinha as duas câmeras de modo
              que as linhas correspondentes em ambas as imagens fiquem
              horizontais, facilitando a reconstrução estéreo
            </li>
          </ul>
          <h6>Salvando os Parâmetros</h6>
          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                cv_file = cv.FileStorage('stereoMap.xml', cv.FILE_STORAGE_WRITE)
                <br />
                cv_file.write('stereoMapL_x',stereoMapL[0])
                <br />
                cv_file.write('stereoMapL_y',stereoMapL[1])
                <br />
                cv_file.write('stereoMapR_x',stereoMapR[0])
                <br />
                cv_file.write('stereoMapR_y',stereoMapR[1])
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>
          <p>
            Os mapas de remapeamento são salvos em um arquivo XML, que pode ser
            usado para processar novas imagens capturadas pelas câmeras e criar
            a visão estéreo.
            <br />
            <br />
            Resumindo: O código captura imagens de duas câmeras, encontra os
            cantos do tabuleiro de xadrez para calibrar cada câmera
            individualmente e, em seguida, realiza a calibração estéreo e a
            retificação. No final, ele salva os mapas de remapeamento que podem
            ser usados para corrigir distorções e preparar as imagens para visão
            estéreo.
            <br />
            <br />O código completo está disponível abaixo:
          </p>
          <i
            onClick={toggleCodeVisibility}
            style={{ cursor: "pointer", fontSize: "24px" }} // Estilo opcional para mudar o cursor e o tamanho do ícone
          >
            {isCodeVisible ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </i>
          Ver
          {isCodeVisible && (
            <div className="code-container">
              <button className="copy-button" onClick={copyToClipboard}>
                Copy
              </button>
              <pre className="code-block" ref={codeRef}>
                <code>
                  {`import numpy as np
import cv2 as cv
import glob

chessboardSize = (8,6)
frameSize = (480 , 640)


criteria = (cv.TERM_CRITERIA_EPS + cv.TERM_CRITERIA_MAX_ITER, 30, 0.001)

objp = np.zeros((chessboardSize[0] * chessboardSize[1], 3), np.float32)
objp[:,:2] = np.mgrid[0:chessboardSize[0],0:chessboardSize[1]].T.reshape(-1,2)

objp = objp * 24
print(objp)


objpoints = [] 
imgpointsL = [] 
imgpointsR = [] 

imagesLeft = glob.glob('caminho/para/suas/imagens/esquerda')
# print(imagesLeft)
imagesRight = glob.glob('caminho/para/suas/imagens/direita')


for imgLeft, imgRight in zip(imagesLeft, imagesRight):
    imgL = cv.imread(imgLeft)
    imgR = cv.imread(imgRight)
    grayL = cv.cvtColor(imgL, cv.COLOR_BGR2GRAY)
    grayR = cv.cvtColor(imgR, cv.COLOR_BGR2GRAY)

    #find the chessboard corners
    retL, cornersL = cv.findChessboardCorners(grayL, chessboardSize, None)
    retR, cornersR = cv.findChessboardCorners(grayR, chessboardSize, None)


    if retL and retR == True:

        objpoints.append(objp)

        cornersL = cv.cornerSubPix(grayL, cornersL, (11,11), (-1,-1), criteria)
        imgpointsL.append(cornersL)

        cornersR = cv.cornerSubPix(grayR, cornersR, (11,11), (-1,-1), criteria)
        imgpointsR.append(cornersR)


        cv.drawChessboardCorners(grayL, chessboardSize, cornersL, retL)
        cv.imshow('img left', grayL)
        cv.drawChessboardCorners(grayR, chessboardSize, cornersR, retR)
        cv.imshow('img right', grayR)
        cv.waitKey(1000)

cv.destroyAllWindows()

retL, cameraMatrixL, distL, rvecsL, tvecsL = cv.calibrateCamera(objpoints, imgpointsL, frameSize, None, None)
heightL, widthL, channelsL = imgL.shape
newCameraMatrixL, roi_L = cv.getOptimalNewCameraMatrix(cameraMatrixL, distL, (widthL, heightL), 1, (widthL, heightL))

retR, cameraMatrixR, distR, rvecsR, tvecsR = cv.calibrateCamera(objpoints, imgpointsR, frameSize, None, None)
heightR, widthR, channelsR = imgR.shape
newCameraMatrixR, roi_R = cv.getOptimalNewCameraMatrix(cameraMatrixR, distR, (widthR, heightR), 1, (widthR, heightR))


flags = 0
flags |= cv.CALIB_FIX_INTRINSIC

#here we fix the intrisic camara matrixes so that only rot, trns, emat and fmat are calculated
#hence intriscic parameters are the same

criteria_stereo = (cv.TERM_CRITERIA_EPS + cv.TERM_CRITERIA_MAX_ITER, 30, 0.001)

#this step is performed to transformation between the two cameras and calculate essential and fundamental matrix

retStereo, newCameraMatrixL, distL, newCameraMatrixR, distR, rot, trans, essentialMatrix, fundamentalMatrix = cv.stereoCalibrate(objpoints, imgpointsL, imgpointsR, newCameraMatrixL, distL, newCameraMatrixR, distR, grayL.shape[::-1], criteria_stereo, flags)

########## Stereo Rectification #################################################

rectifyScale= 1
rectL, rectR, projMatrixL, projMatrixR, Q, roi_L, roi_R = cv.stereoRectify(newCameraMatrixL, distL, newCameraMatrixR, distR, grayL.shape[::-1], rot, trans, rectifyScale,(0,0))

stereoMapL = cv.initUndistortRectifyMap(newCameraMatrixL, distL, rectL, projMatrixL, grayL.shape[::-1], cv.CV_16SC2)
stereoMapR = cv.initUndistortRectifyMap(newCameraMatrixR, distR, rectR, projMatrixR, grayR.shape[::-1], cv.CV_16SC2)

print("Saving parameters!")
cv_file = cv.FileStorage('stereoMap.xml', cv.FILE_STORAGE_WRITE)

cv_file.write('stereoMapL_x',stereoMapL[0])
cv_file.write('stereoMapL_y',stereoMapL[1])
cv_file.write('stereoMapR_x',stereoMapR[0])
cv_file.write('stereoMapR_y',stereoMapR[1])

cv_file.release()`}
                </code>
              </pre>
              {showNotification && (
                <div className="notification">
                  Código copiado para a área de transferência!
                </div>
              )}
            </div>
          )}
          <h4 id="disparidade">Mapas de disparidade com visão estéreo</h4>
          <p>
            O mapa de disparidade é essencial para reconstruir a profundidade em
            uma cena a partir de duas imagens capturadas por câmeras estéreo.
            Dessa maneira, torna possível a movimentação do robô no espaço,
            sabendo quando está se aproximando de algo e assim desviar.
          </p>
          <ol>
            <li>Definição dos parâmetros para o algoritmo de visão estéreo</li>
            <div className="code-container">
              <button className="copy-button" onClick={copyToClipboard}>
                Copy
              </button>
              <pre className="code-block" ref={codeRef}>
                <code>
                  minDisparity = 1 <br />
                  numDisparities = 60 - minDisparity <br />
                  blockSize = 5 <br />
                  uniquenessRatio = 1 <br />
                  speckleWindowSize = 3 <br />
                  speckleRange = 3
                  <br />
                  disp12MaxDiff = 100 <br />
                  width = 640 <br />
                  baseline = 0.6 <br />
                  P1 = 600 <br />
                  P2 = 2400
                </code>
              </pre>
              {showNotification && (
                <div className="notification">
                  Código copiado para a área de transferência!
                </div>
              )}
            </div>
          </ol>
          <ul>
            <li>
              <strong>minDisparity</strong>: Disparidade mínima que o algoritmo
              vai considerar ao calcular o mapa de disparidade.
            </li>
            <li>
              <strong>numDisparities</strong>: Número total de disparidades
              possíveis. É a faixa de valores de disparidade que o algoritmo irá
              procurar. Ele precisa ser um múltiplo de 16, e é ajustado em torno
              do valor de minDisparity.
            </li>
            <li>
              <strong>blockSize</strong>: Tamanho do bloco de pixels utilizado
              para correspondência de blocos (quanto maior o valor, mais
              robusta, mas mais lenta é a correspondência).
            </li>
            <li>
              <strong>uniquenessRatio</strong>: Controla quão única deve ser a
              correspondência encontrada. Valores menores tornam o critério mais
              rigoroso.
            </li>
            <li>
              <strong>speckleWindowSize</strong>: Tamanho da janela usada para
              filtrar ruídos e pequenos detalhes indesejados no mapa de
              disparidade.
            </li>
            <li>
              <strong>speckleRange</strong>: Diferença máxima permitida entre
              disparidades consecutivas para considerar que são parte da mesma
              região.
            </li>
            <li>
              <strong>disp12MaxDiff</strong>: Diferença máxima permitida na
              correspondência de disparidade para validar o cálculo.
            </li>
            <li>
              <strong>width</strong>: A largura da imagem (não é diretamente
              usada no código atual).
            </li>
            <li>
              <strong>baseline</strong>: A distância física entre as duas
              câmeras (não usada diretamente no cálculo da disparidade, mas
              necessária para cálculo de profundidade, caso seja implementado).
            </li>
            <li>
              <strong>P1 e P2</strong>: São parâmetros de suavização de
              disparidades; P1 é a penalidade aplicada para mudanças pequenas na
              disparidade entre pixels vizinhos, enquanto P2 é a penalidade para
              mudanças maiores.
            </li>
          </ul>
          <h6>Criação do objeto StereoSGBM</h6>
          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                {`stereo = cv.StereoSGBM_create(
    minDisparity=minDisparity,
    numDisparities=numDisparities,
    blockSize=blockSize,
    uniquenessRatio=uniquenessRatio,
    speckleWindowSize=speckleWindowSize,
    speckleRange=speckleRange,
    disp12MaxDiff=disp12MaxDiff,
    P1=P1,
    P2=P2
)`}
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>
          <p>
            <strong>cv.StereoSGBM_create</strong>: Cria um objeto para calcular
            o mapa de disparidade usando o algoritmo{" "}
            <strong>Semi-Global Block Matching (SGBM)</strong>, que é um método
            robusto para calcular a correspondência estéreo entre duas imagens.
            <br />
            <strong>minDisparity, numDisparities, blockSize, etc.</strong>:
            Estes parâmetros configuram o comportamento do algoritmo SGBM,
            conforme descrito anteriormente.
          </p>
          <h4>Cálculo de disparidade</h4>
          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                {`disparity = stereo.compute(imgL, imgR).astype(np.float32) / 16.0`}
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>
          <ul>
            <li>
              <strong>stereo.compute</strong>: Calcula o mapa de disparidade
              entre as duas imagens estéreo.
              <ul>
                <li>
                  A <strong>disparidade</strong> representa o deslocamento
                  horizontal entre pontos correspondentes nas duas imagens. Um
                  valor de disparidade maior significa que o objeto está mais
                  próximo da câmera (quanto maior o deslocamento entre os
                  pontos, menor a distância do objeto).
                </li>
                <li>
                  O resultado é dividido por <code>16.0</code> porque o OpenCV
                  armazena o resultado com uma precisão ampliada (a disparidade
                  é multiplicada por 16 durante o cálculo, então precisa ser
                  ajustada ao final).
                </li>
              </ul>
            </li>
          </ul>
          <h4>Exibição das imagens e do mapa de disparidade</h4>
          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                {`cv.imshow('leftview', imgL)
cv.imshow('rightview', imgR)
cv.imshow('disparity', (disparity - minDisparity) / numDisparities)
cv.waitKey()`}
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>
          <p>
            A disparidade é normalizada antes de ser exibida usando{" "}
            <code>(disparity - minDisparity) / numDisparities</code>. Isso
            garante que os valores sejam convertidos para uma faixa que pode ser
            visualizada em uma imagem (entre 0 e 1). <br />
            <br /> Também é possível realizar estes mapas utilizando as câmeras
            em tempo real, passando os parâmetros da câmera que você estiver
            utilizando.
          </p>
          <div className="code-container">
            <button className="copy-button" onClick={copyToClipboard}>
              Copy
            </button>
            <pre className="code-block" ref={codeRef}>
              <code>
                {`capR = cv.VideoCapture("nvarguscamerasrc sensor-id=0 ! 'video/x-raw(memory:NVMM), width=640, height=480, format=(string)NV12, framerate=(fraction)20/1' ! nvvidconv flip-method=0 ! videoconvert ! appsink")`}
              </code>
            </pre>
            {showNotification && (
              <div className="notification">
                Código copiado para a área de transferência!
              </div>
            )}
          </div>
          <p>
            Em resumo o código carrega duas imagens estéreo (esquerda e direita)
            e utiliza o algoritmo Semi-Global Block Matching (SGBM) para
            calcular o <strong>mapa de disparidade</strong>, que representa as
            diferenças de paralaxe entre os pontos correspondentes nas duas
            imagens. O mapa de disparidade é então usado para inferir a
            profundidade dos objetos na cena: quanto maior a disparidade, mais
            perto está o objeto da câmera.
          </p>
          <i
            onClick={toggleCodeVisibility}
            style={{ cursor: "pointer", fontSize: "24px" }} // Estilo opcional para mudar o cursor e o tamanho do ícone
          >
            {isCodeVisible ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </i>
          Ver
          {isCodeVisible && (
            <div className="code-container">
              <button className="copy-button" onClick={copyToClipboard}>
                Copy
              </button>
              <pre className="code-block" ref={codeRef}>
                <code>
                  {`from __future__ import print_function

import numpy as np
import cv2 as cv

minDisparity = 1
numDisparities = 60 - minDisparity
blockSize = 5
uniquenessRatio = 1
speckleWindowSize = 3
speckleRange = 3
disp12MaxDiff = 100
width = 640
baseline = 0.6
P1 = 600
P2 = 2400

stereo = cv.StereoSGBM_create(
    minDisparity=minDisparity,
    numDisparities=numDisparities,
    blockSize=blockSize,
    uniquenessRatio=uniquenessRatio,
    speckleWindowSize=speckleWindowSize,
    speckleRange=speckleRange,
    disp12MaxDiff=disp12MaxDiff,
    P1=P1,
    P2=P2
)
imgL = cv.imread("/")
imgR = cv.imread("/")

disparity = stereo.compute(imgL, imgR).astype(np.float32) / 16.0

cv.imshow('leftview',imgL)
cv.imshow('rightview', imgR)
cv.imshow('disparity', (disparity - minDisparity) / numDisparities)
cv.waitKey()`}
                </code>
              </pre>
              {showNotification && (
                <div className="notification">
                  Código copiado para a área de transferência!
                </div>
              )}
            </div>
          )}
          <img
            src={ExempleDisparity}
            alt="Camera imx219 da waveshare"
            className="img-rosa"
          ></img>
          <p style={{ fontSize: "10px" }}>
            Exemplo de mapas de disparidade: ResearchGate, uploaded by Danilo
            Lima, 2010. Fonte:
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ROSA;
