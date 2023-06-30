import AlgoCard from "@/components/AlgoCard";
import Button from "@/components/Button";
import CodeIcon from "@/icons/CodeIcon";
import DropdownIcon from "@/icons/DropdownIcon";
import Textarea from "@/components/Textarea";

export default function Home() {
  return (
    <section className="flex flex-col gap-10 mb-10">
      <article className="flex flex-col items-center gap-8 py-10 sm:pt-20 text-center">
        <h1 className="font-bold text-6xl sm:text-8xl">
          Run quick NLP algorithms on the web
        </h1>
        <p className="text-2xl sm:text-4xl">
          Write a text, choose an algorithm, and export desired result in
          various formats.
        </p>
        <form className="w-full flex flex-col gap-8 p-6 border-2 border-foreground rounded-2xl">
          <Textarea name="corpus" rows={3} placeholder="Write something..." />
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4">
            <Button
              size="lg"
              endIcon={DropdownIcon}
              className="min-w-full sm:min-w-[220px]"
            >
              Choose algo
            </Button>
            <Button
              size="lg"
              variant="contained"
              startIcon={CodeIcon}
              className="min-w-full sm:min-w-0"
            >
              Invoke
            </Button>
          </div>
        </form>
      </article>

      <article className="flex flex-col gap-6">
        <h2 className="font-bold text-2xl text-center text-accent">
          Algorithms
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6">
          {Array(16)
            .fill(0)
            .map((_, i) => (
              <AlgoCard key={i} />
            ))}
        </div>
      </article>
    </section>
  );
}
