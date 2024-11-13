import { initializeObserver } from '/js/app';
import { screen } from '@testing-library/dom';

//INTEGRATION TEST

global.IntersectionObserver = class {
    constructor(callback) {
        this.callback = callback;
    }
    observe(element) {
        this.callback([{ target: element, isIntersecting: true }]);
    }
    unobserve() {}
    disconnect() {}
};

// Configura o DOM de teste
beforeEach(() => {
    document.body.innerHTML = `
        <div class="hidden">X Element</div>
        <div class="hiddenZ">Z Element</div>
        <div class="hiddenY">Y Element</div>
        <div class="hiddenYNeg">YNeg Element</div>
    `;
});

test('should add "show" class to elements when intersecting', () => {
    initializeObserver();

    // Simula a intersecção
    const elementsX = screen.getByText("X Element");
    const elementsZ = screen.getByText("Z Element");

    // Simula o disparo da interseção com isIntersecting = true
    const mockEntry = [
        { target: elementsX, isIntersecting: true },
        { target: elementsZ, isIntersecting: true }
    ];

    // Força a função callback do observer a ser chamada
    const observerCallback = IntersectionObserver.mock.calls[0][0];
    observerCallback(mockEntry);

    expect(elementsX.classList.contains('show')).toBe(true);
    expect(elementsZ.classList.contains('show')).toBe(true);
});

test('should remove "show" class when not intersecting', () => {
    initializeObserver();

    // Simula a intersecção com isIntersecting = false
    const elementsX = screen.getByText("X Element");

    const mockEntry = [
        { target: elementsX, isIntersecting: false }
    ];

    // Força a função callback do observer a ser chamada
    const observerCallback = IntersectionObserver.mock.calls[0][0];
    observerCallback(mockEntry);

    expect(elementsX.classList.contains('show')).toBe(false);
});

//UNIT TEST

// Mock do IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation((callback) => {
    return {
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
        trigger: (entries) => callback(entries),  // Método para disparar o callback manualmente no teste
    };
});

describe('IntersectionObserver behavior', () => {
    let element1, element2, element3, element4;

    beforeEach(() => {
        // Criar elementos de teste no DOM
        document.body.innerHTML = `
            <div class="hidden"></div>
            <div class="hiddenZ"></div>
            <div class="hiddenY"></div>
            <div class="hiddenYNeg"></div>
        `;
        
        // Selecionar os elementos
        element1 = document.querySelector('.hidden');
        element2 = document.querySelector('.hiddenZ');
        element3 = document.querySelector('.hiddenY');
        element4 = document.querySelector('.hiddenYNeg');
    });

    test('should add "show" class when entry is intersecting', () => {
        // Criar o mock de entrada para o Observer
        const entries = [
            { isIntersecting: true, target: element1 },
            { isIntersecting: true, target: element2 },
            { isIntersecting: true, target: element3 },
            { isIntersecting: true, target: element4 },
        ];

        // Criar o observer
        const myObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        // Observar os elementos
        myObserver.observe(element1);
        myObserver.observe(element2);
        myObserver.observe(element3);
        myObserver.observe(element4);

        // Simular a interseção
        myObserver.trigger(entries);

        // Verificar se a classe "show" foi adicionada aos elementos
        expect(element1.classList.contains('show')).toBe(true);
        expect(element2.classList.contains('show')).toBe(true);
        expect(element3.classList.contains('show')).toBe(true);
        expect(element4.classList.contains('show')).toBe(true);
    });

    test('should remove "show" class when entry is not intersecting', () => {
        // Criar o mock de entrada para o Observer
        const entries = [
            { isIntersecting: false, target: element1 },
            { isIntersecting: false, target: element2 },
            { isIntersecting: false, target: element3 },
            { isIntersecting: false, target: element4 },
        ];

        // Criar o observer
        const myObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        // Observar os elementos
        myObserver.observe(element1);
        myObserver.observe(element2);
        myObserver.observe(element3);
        myObserver.observe(element4);

        // Simular a interseção
        myObserver.trigger(entries);

        // Verificar se a classe "show" foi removida dos elementos
        expect(element1.classList.contains('show')).toBe(false);
        expect(element2.classList.contains('show')).toBe(false);
        expect(element3.classList.contains('show')).toBe(false);
        expect(element4.classList.contains('show')).toBe(false);
    });
});

//E2E