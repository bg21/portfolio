<?php
    session_start(); //Abrindo a sessão em todas as páginas
    ob_start(); //Pra evitar problemas de redirecionamento do php
    header("Content-type: text/html; charset=utf-8");
    setlocale(LC_TIME, 'pt_BR', 'pt_BR.utf-8', 'pt_BR.utf-8', 'portuguese'); //Deixar datas no formato brasileiro
    date_default_timezone_set('America/Sao_Paulo'); //Nossa fuso horário pra brasileiro 
    $autoLoad = function($class){
        include('classes/'.$class.'.php');
    };
    spl_autoload_register($autoLoad);

    
    define('INCLUDE_PATH', 'http://localhost/github/');
    define('INCLUDE_PATH_PAINEL', INCLUDE_PATH.'painel/');
    define('BASE_DIR_PAINEL', __DIR__.'/painel');
    /*acrescentar diretório /Painel/ após incluir o site, para isso crie,
    uma pasta chamada Painel e coloque todo o painel dentro */
    
    const host = 'localhost';
    const dbname = 'dash_completo';
    const user = 'root';
    const senha = '';

    ob_end_flush(); //Pra evitar problemas de redirecionamento do php
    session_write_close(); //vai finalizar a sessão daquela página
    /*O php automaticamente finaliza a sessão no final do script */
?>