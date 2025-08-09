"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FileText } from "lucide-react"

export function ResumeViewer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      
      <DialogContent className="max-w-4xl h-[90vh] p-0">
        <DialogHeader className="p-4 border-b">
          <DialogTitle>Ahamed Ibrahim M - Resume</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <iframe src="/resume.pdf" width="100%" height="100%" className="border-none">
            This browser does not support PDFs. Please download the PDF to view it:
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}
