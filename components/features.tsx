import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, Video, Zap, Wand2, Edit3, Mic, RotateCcw, GraduationCap } from "lucide-react"

const features = [
  {
    icon: ImageIcon,
    title: "Image",
    description: "Generate images with custom styles by Flux and Midjourney.",
    badge: "New",
    color: "bg-blue-500",
  },
  {
    icon: Video,
    title: "Video",
    description: "Generate videos with Haiper, Pika, Runway Luma, and more.",
    badge: null,
    color: "bg-orange-500",
  },
  {
    icon: Zap,
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    badge: null,
    color: "bg-cyan-500",
  },
  {
    icon: Wand2,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 4x.",
    badge: "New",
    color: "bg-black",
  },
  {
    icon: Edit3,
    title: "Edit",
    description: "Edit and change style, or expand photos and generations.",
    badge: "New",
    color: "bg-purple-500",
  },
  {
    icon: Mic,
    title: "Video Lipsync",
    description: "Lip sync any video to any audio. Realistic facial sync.",
    badge: "New",
    color: "bg-green-500",
  },
  {
    icon: RotateCcw,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    badge: "New",
    color: "bg-gray-800",
  },
  {
    icon: GraduationCap,
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters.",
    badge: null,
    color: "bg-red-500",
  },
]

export function FeatureGrid() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Generate</h2>
          <Button
            variant="ghost"
            className="text-accent hover:text-accent-foreground"
          >
            Show all
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group transition-all duration-200 cursor-pointer border-0 bg-transparent"
            >
              <div className="-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl ${feature.color} flex-shrink-0`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground text-[14px]">
                        {feature.title}
                      </h3>
                      {feature.badge && (
                        <Badge
                          variant="default"
                          className="text-[8px] bg-blue-500 hover:bg-blue-600 text-white"
                        >
                          {feature.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-relaxed w-[155px]">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground transition-colors rounded-full"
                    >
                      Open
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
    }