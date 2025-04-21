# O design pattern observer é um padrão de projeto comportamental que define uma dependência um-para-muitos entre objetos, de modo que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.
# Nesse exemplo, temos um observador que é notificado quando um novo evento ocorre. O padrão é útil quando você tem uma situação em que um objeto (o sujeito) precisa notificar outros objetos (os observadores) sobre mudanças de estado ou eventos.

from abc import ABC, abstractmethod

class Observer(ABC):
    @abstractmethod
    def on_new_event(self, job) -> None:
        pass


class OberserverExample(Observer):
    def __init__(self, name):
        self.name = name

    def on_new_event(self, job):
        print(f"hey {self.name} new job coming ", job)


class Obervable(ABC):
    @abstractmethod
    def attach(observer: Observer) -> None:
        pass

    @abstractmethod
    def dettach(observer: Observer) -> None:
        pass

    @abstractmethod
    def emit(event) -> None:
        pass


class ObervableExample(Obervable):
    from typing import List

    OBSERVERS: List[Observer] = []

    @staticmethod
    def attach(observer: Observer) -> None:
        ObervableExample.OBSERVERS.append(observer)

    @staticmethod
    def dettach(observer: Observer) -> None:
        ObervableExample.OBSERVERS = [
            obs for obs in ObervableExample.OBSERVERS if obs != observer
        ]

    @staticmethod
    def emit(event):
        for obs in ObervableExample.OBSERVERS:
            obs.on_new_event(event)


def main():
    observer1 = OberserverExample("wil")
    observer2 = OberserverExample("gabi")

    ObervableExample.attach(observer1)
    ObervableExample.attach(observer2)
    ObervableExample.emit("both see this event")

    ObervableExample.dettach(observer1)
    ObervableExample.emit("Only gabi see this event")


main()
