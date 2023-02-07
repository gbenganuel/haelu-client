import { Fragment, useState } from 'react'
import { Dialog, Transition, RadioGroup, Combobox } from '@headlessui/react'
import { XMarkIcon, CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { LinkIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import axios from 'axios'

const foodIntakeOptions = [0,1,2]
const weightLossOptions = [0,1,2,3]
const mobilityOptions = [0,1,2]
const psychStressOptions = [0,2]
const neurProblemOptions = [0,1,2]
const bmiOptions = [0,1,2,3]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Mna() {
    const [foodIntake, setFoodIntake] = useState(foodIntakeOptions[0]);
    const [weightLoss, setWeightLoss] = useState(weightLossOptions[0]);
    const [mobility, setMobility] = useState(mobilityOptions[0]);
    const [psychStress, setPsychStress] = useState(psychStressOptions[0]);
    const [neurProblem, setNeurProblem] = useState(neurProblemOptions[0]);
    const [bmi, setBmi] = useState(bmiOptions[0]);
    const [userId, setUserId] = useState('')

    const people = [
            {
            id: 1,
            name: 'Leslie Alexander',
            email: 'leslie.alexander@example.com',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
            id: 2,
            name: 'Tom Cook',
            email: 'tom.cook@example.com',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
            id: 3,
            name: 'Whitney Francis',
            email: 'whitney.francis@example.com',
            imageUrl:
                'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
            id: 4,
            name: 'Leonard Krasner',
            email: 'leonard.krasner@example.com',
            imageUrl:
                'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
            id: 5,
            name: 'Floyd Miles',
            email: 'floyd.miles@example.com',
            imageUrl:
                'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
            id: 6,
            name: 'Emily Selman',
            email: 'emily.selman@example.com',
            imageUrl:
                'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        // More users...
      ]

    const [open, setOpen] = useState(false)

    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
        ? people
        : people.filter((person) => {
            return person.name.toLowerCase().includes(query.toLowerCase())
            })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('food_intake_decline', foodIntake);
        form.append('weight_loss', weightLoss);
        form.append('mobility', mobility);
        form.append('psych_stress_or_acute_disease', psychStress);
        form.append('neurological_problems', neurProblem);
        form.append('bmi', bmi);
        form.append('user_id', userId['id']);

        try {
            const response = await axios.post('https://awxp7lrqygragwzi62oykz3rh40cqgml.lambda-url.us-west-2.on.aws/api/mna', form);
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <>
    
    <button
        type="button"
        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        onClick={() => setOpen(true)}
    >
        New MNA
    </button>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form onSubmit={handleSubmit} className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">                  
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="bg-cyan-700 py-6 px-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-medium text-white"> Mini Nutritional Assessment</Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-red-700 text-red-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-indigo-300">
                            Get started by filling in the information below.
                          </p>
                        </div>
                      </div>

                      <div className=" px-4 py-4">
                        <Combobox as="div" value={userId} onChange={setUserId} name="userId">
                            <Combobox.Label className="block text-sm font-medium text-gray-700">Select Patient</Combobox.Label>
                            <div className="relative mt-1">
                                <Combobox.Input
                                className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                onChange={(event) => setQuery(event.target.value)}
                                displayValue={(person) => person?.name}
                                />
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Combobox.Button>

                                {filteredPeople.length > 0 && (
                                <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {filteredPeople.map((person) => (
                                    <Combobox.Option
                                        key={person.id}
                                        value={person}
                                        className={({ active }) =>
                                        classNames(
                                            'relative cursor-default select-none py-2 pl-3 pr-9',
                                            active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                        )
                                        }
                                    >
                                        {({ active, selected }) => (
                                        <>
                                            <div className="flex items-center">
                                            <img src={person.imageUrl} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
                                            <span className={classNames('ml-3 truncate', selected && 'font-semibold')}>{person.name}</span>
                                            </div>

                                            {selected && (
                                            <span
                                                className={classNames(
                                                'absolute inset-y-0 right-0 flex items-center pr-4',
                                                active ? 'text-white' : 'text-indigo-600'
                                                )}
                                            >
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                            )}
                                        </>
                                        )}
                                    </Combobox.Option>
                                    ))}
                                </Combobox.Options>
                                )}
                            </div>
                        </Combobox>

                        <input type="hidden" name="userId" value={userId} />
                      </div>

                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-gray-200 px-4 sm:px-6">
                            <div className="space-y-6 pt-6 pb-5">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">A. Has food intake declined over the past 3 months due to loss
                                        of appetite, digestive problems, chewing or swallowing
                                        difficulties?</h3>
                                    </div>

                                    <RadioGroup value={foodIntake} onChange={setFoodIntake} name="foodIntake" className="mt-2">
                                        <RadioGroup.Label className="sr-only"> Choose a memory option </RadioGroup.Label>
                                        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                                        {foodIntakeOptions.map((option) => (
                                            <RadioGroup.Option
                                            key={option}
                                            value={option}
                                            className={({ active, checked }) =>
                                                classNames(
                                                active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                                                checked
                                                    ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                                                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                                                'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                                                )
                                            }
                                            >
                                            <RadioGroup.Label as="span">{option}</RadioGroup.Label>
                                            </RadioGroup.Option>
                                        ))}
                                        </div>
                                    </RadioGroup>
                                    <input type="hidden" name="foodIntake" value={foodIntake} />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">B. Weight loss during the last 3 months</h3>
                                    </div>

                                    <RadioGroup value={weightLoss} onChange={setWeightLoss} name="weightLoss" className="mt-2">
                                        <RadioGroup.Label className="sr-only"> Choose a memory option </RadioGroup.Label>
                                        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                                        {weightLossOptions.map((option) => (
                                            <RadioGroup.Option
                                            key={option}
                                            value={option}
                                            className={({ active, checked }) =>
                                                classNames(
                                                active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                                                checked
                                                    ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                                                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                                                'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                                                )
                                            }
                                            >
                                            <RadioGroup.Label as="span">{option}</RadioGroup.Label>
                                            </RadioGroup.Option>
                                        ))}
                                        </div>
                                    </RadioGroup>
                                    <input type="hidden" name="weightLoss" value={weightLoss} />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">C. Mobility</h3>
                                    </div>

                                    <RadioGroup value={mobility} onChange={setMobility} name="mobility" className="mt-2">
                                        <RadioGroup.Label className="sr-only"> Choose a memory option </RadioGroup.Label>
                                        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                                        {mobilityOptions.map((option) => (
                                            <RadioGroup.Option
                                            key={option}
                                            value={option}
                                            className={({ active, checked }) =>
                                                classNames(
                                                active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                                                checked
                                                    ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                                                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                                                'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                                                )
                                            }
                                            >
                                            <RadioGroup.Label as="span">{option}</RadioGroup.Label>
                                            </RadioGroup.Option>
                                        ))}
                                        </div>
                                    </RadioGroup>
                                    <input type="hidden" name="mobility" value={mobility} />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">D. Has suffered psychological stress or acute disease in the
                                        past 3 months?</h3>
                                    </div>

                                    <RadioGroup value={psychStress} onChange={setPsychStress} name="psychStress" className="mt-2">
                                        <RadioGroup.Label className="sr-only"> Choose a memory option </RadioGroup.Label>
                                        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                                        {psychStressOptions.map((option) => (
                                            <RadioGroup.Option
                                            key={option}
                                            value={option}
                                            className={({ active, checked }) =>
                                                classNames(
                                                active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                                                checked
                                                    ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                                                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                                                'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                                                )
                                            }
                                            >
                                            <RadioGroup.Label as="span">{option}</RadioGroup.Label>
                                            </RadioGroup.Option>
                                        ))}
                                        </div>
                                    </RadioGroup>
                                    <input type="hidden" name="psychStress" value={psychStress} />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">E. Neuropsychological problems</h3>
                                    </div>

                                    <RadioGroup value={neurProblem} onChange={setNeurProblem} name="neurProblem" className="mt-2">
                                        <RadioGroup.Label className="sr-only"> Choose a memory option </RadioGroup.Label>
                                        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                                        {neurProblemOptions.map((option) => (
                                            <RadioGroup.Option
                                            key={option}
                                            value={option}
                                            className={({ active, checked }) =>
                                                classNames(
                                                active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                                                checked
                                                    ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                                                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                                                'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                                                )
                                            }
                                            >
                                            <RadioGroup.Label as="span">{option}</RadioGroup.Label>
                                            </RadioGroup.Option>
                                        ))}
                                        </div>
                                    </RadioGroup>
                                    <input type="hidden" name="neurProblem" value={neurProblem} />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">F. Body Mass Index (BMI) = weight in kg / (height in m)
                                        2</h3>
                                    </div>

                                    <RadioGroup value={bmi} onChange={setBmi} name="bmi" className="mt-2">
                                        <RadioGroup.Label className="sr-only"> Choose a memory option </RadioGroup.Label>
                                        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                                        {bmiOptions.map((option) => (
                                            <RadioGroup.Option
                                            key={option}
                                            value={option}
                                            className={({ active, checked }) =>
                                                classNames(
                                                active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                                                checked
                                                    ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                                                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                                                'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                                                )
                                            }
                                            >
                                            <RadioGroup.Label as="span">{option}</RadioGroup.Label>
                                            </RadioGroup.Option>
                                        ))}
                                        </div>
                                    </RadioGroup>
                                    <input type="hidden" name="bmi" value={bmi} />
                                </div>
                            </div>
                          <div className="pt-4 pb-6">
                            <div className="mt-4 flex text-sm">
                              <a href="#" className="group inline-flex items-center text-gray-500 hover:text-gray-900">
                                <QuestionMarkCircleIcon
                                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <span className="ml-2">Learn more about Mini Nutritional Assessment from NHS guidelines</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 py-4">
                      <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  )
}
