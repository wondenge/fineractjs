

import ApiClient from '../ApiClient';

/**
 * The DeleteDataTablesResponse model module.
 * @module model/DeleteDataTablesResponse
 * @version 1.0
 */
class DeleteDataTablesResponse {
    /**
     * Constructs a new <code>DeleteDataTablesResponse</code>.
     * DeleteDataTablesResponse
     * @alias module:model/DeleteDataTablesResponse
     */
    constructor() { 
        
        DeleteDataTablesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteDataTablesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteDataTablesResponse} obj Optional instance to populate.
     * @return {module:model/DeleteDataTablesResponse} The populated <code>DeleteDataTablesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteDataTablesResponse();

            if (data.hasOwnProperty('resourceIdentifier')) {
                obj['resourceIdentifier'] = ApiClient.convertToType(data['resourceIdentifier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} resourceIdentifier
 */
DeleteDataTablesResponse.prototype['resourceIdentifier'] = undefined;






export default DeleteDataTablesResponse;

