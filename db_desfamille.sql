CREATE TABLE Musician (
  UserID int NOT NULL AUTO_INCREMENT,
  Username varchar(255) NOT NULL,
  Password varchar(255) NOT NULL,
  PRIMARY KEY (UserID)
);

CREATE TABLE Timeline (
    TimelineID int NOT NULL AUTO_INCREMENT,
    UserID int NOT NULL,
    TimelineName varchar(255) NOT NULL,
    PRIMARY KEY (TimelineID),
    FOREIGN KEY (UserID) REFERENCES Musician(UserID)
);

CREATE TABLE Sound (
    SoundId int NOT NULL AUTO_INCREMENT,
    SoundName varchar(255) NOT NULL,
    TimelineID int,
    PRIMARY KEY (SoundId),
    FOREIGN KEY (TimelineID) REFERENCES Timeline(TimelineID)
);
