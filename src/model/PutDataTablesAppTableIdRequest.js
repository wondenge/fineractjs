

import ApiClient from '../ApiClient';

/**
 * The PutDataTablesAppTableIdRequest model module.
 * @module model/PutDataTablesAppTableIdRequest
 * @version 1.0
 */
class PutDataTablesAppTableIdRequest {
    /**
     * Constructs a new <code>PutDataTablesAppTableIdRequest</code>.
     * PutDataTablesAppTableIdRequest
     * @alias module:model/PutDataTablesAppTableIdRequest
     */
    constructor() { 
        
        PutDataTablesAppTableIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutDataTablesAppTableIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutDataTablesAppTableIdRequest} obj Optional instance to populate.
     * @return {module:model/PutDataTablesAppTableIdRequest} The populated <code>PutDataTablesAppTableIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutDataTablesAppTableIdRequest();

            if (data.hasOwnProperty('BusinessDescription')) {
                obj['BusinessDescription'] = ApiClient.convertToType(data['BusinessDescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} BusinessDescription
 */
PutDataTablesAppTableIdRequest.prototype['BusinessDescription'] = undefined;






export default PutDataTablesAppTableIdRequest;

