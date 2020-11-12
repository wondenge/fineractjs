

import ApiClient from '../ApiClient';

/**
 * The PutDataTablesResponse model module.
 * @module model/PutDataTablesResponse
 * @version 1.0
 */
class PutDataTablesResponse {
    /**
     * Constructs a new <code>PutDataTablesResponse</code>.
     * PutDataTablesResponse
     * @alias module:model/PutDataTablesResponse
     */
    constructor() { 
        
        PutDataTablesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutDataTablesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutDataTablesResponse} obj Optional instance to populate.
     * @return {module:model/PutDataTablesResponse} The populated <code>PutDataTablesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutDataTablesResponse();

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
PutDataTablesResponse.prototype['resourceIdentifier'] = undefined;






export default PutDataTablesResponse;

