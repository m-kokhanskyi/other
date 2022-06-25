<?php 

class Report
{
    private Author $author;
    private string $title;
    private string $content;
    private DateTime $date;
 
    public function getData(): array
    {
        return [
            'author' => $this->author->fullName(),
            'title' => $this->title,
            'content' => $this->content,
            'timestamp' => $this->date->getTimestamp(),
        ];
    }
 
    public function printJson(): string
    {
        return json_encode($this->getData());
    }
 
    public function printHtml(): string
    {
        return `<div>
                    <h1>{$this->title}</h1>
                    <div>
                        <p>{$this->date->format('Y-m-d H:i:s')}</p>
                        <p>{$this->author->fullName()}</p>
                        <p>{$this->content}</p>
                    </div>
                </div>`;
    }
}
