package com.quizzy.entity;

import java.util.ArrayList;

public class Questao {

	private Long id;
	private String pergunta;
	private ArrayList<String> itens;

	public Questao() {

	}

	public Questao(Long id, String pergunta, ArrayList<String> itens) {
		this.id = id;
		this.pergunta = pergunta;
		this.itens = itens;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPergunta() {
		return pergunta;
	}

	public void setPergunta(String pergunta) {
		this.pergunta = pergunta;
	}

	public ArrayList<String> getItens() {
		return itens;
	}

	public void setItens(ArrayList<String> itens) {
		this.itens = itens;
	}

}
