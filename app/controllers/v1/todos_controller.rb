class V1::TodosController < ApplicationController
    def index
        @todos = Todo.where('completed = ' + params[:completed])
        render json: {
            data: @todos
        }, status: :ok
    end

    def show
        begin
            @todo = Todo.find(params[:id])
            render json: {
                data: @todo
            }, status: :ok
        rescue => e
            render json: {
                error: e.to_s
            }, status: :not_found
        end
    end

    def create
        @todo = Todo.new(todo_params)
        if @todo.save
            render json: {
                data: @todo
            }, status: :created
        else
            render json: {
                data: @todo.errors
            }, status: :unprocessable_entity
        end
    end

    def update
        @todo = Todo.find(params[:id])
        if @todo.update(todo_params)
            render json: {
                data: @todo
            }, status: :ok
        else
            render json: {
                status: 'ERROR',
                data: @todo.errors
            }, status: :unprocessable_entity
        end
    end

    def destroy
        @todo = Todo.find(params[:id])
        if @todo.destroy
            render json: {
                message: 'Todo deleted'
            }, status: :ok
        else
            render json: {
                message: 'Todo could not be deleted'
            }, status: :unprocessable_entity
        end
    end

    private

    def todo_params
        params.permit(:name, :description, :completed)
    end
end
