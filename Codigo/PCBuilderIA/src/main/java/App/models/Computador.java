package App.models;

import jdk.jfr.Timestamp;

public class Computador {

    private  int id;
    private Timestamp data;
    private Hardware processador;
    private Hardware placaDeVideo;
    private Hardware memoriaRam;
    private Hardware armazenamento;
    private Hardware placaMae;
    private Hardware fonte;

    public Computador() {
    }

    public Computador(int id, Hardware processador, Hardware placaDeVideo, Hardware memoriaRam, Hardware armazenamento, Hardware placaMae, Hardware fonte) {
        this.id = id;
        this.processador = processador;
        this.placaDeVideo = placaDeVideo;
        this.memoriaRam = memoriaRam;
        this.armazenamento = armazenamento;
        this.placaMae = placaMae;
        this.fonte = fonte;
    }

    public void setData(Timestamp data) {
        this.data = data;
    }

    public Timestamp getData() {
        return data;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Hardware getProcessador() {
        return processador;
    }

    public void setProcessador(Hardware processador) {
        this.processador = processador;
    }

    public Hardware getPlacaDeVideo() {
        return placaDeVideo;
    }

    public void setPlacaDeVideo(Hardware placaDeVideo) {
        this.placaDeVideo = placaDeVideo;
    }

    public Hardware getMemoriaRam() {
        return memoriaRam;
    }

    public void setMemoriaRam(Hardware memoriaRam) {
        this.memoriaRam = memoriaRam;
    }

    public Hardware getArmazenamento() {
        return armazenamento;
    }

    public void setArmazenamento(Hardware armazenamento) {
        this.armazenamento = armazenamento;
    }

    public Hardware getPlacaMae() {
        return placaMae;
    }

    public void setPlacaMae(Hardware placaMae) {
        this.placaMae = placaMae;
    }

    public Hardware getFonte() {
        return fonte;
    }

    public void setFonte(Hardware fonte) {
        this.fonte = fonte;
    }
}
