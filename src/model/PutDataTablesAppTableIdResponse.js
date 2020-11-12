

import ApiClient from '../ApiClient';
import PutDataTablesAppTableIdResponseChanges from './PutDataTablesAppTableIdResponseChanges';

/**
 * The PutDataTablesAppTableIdResponse model module.
 * @module model/PutDataTablesAppTableIdResponse
 * @version 1.0
 */
class PutDataTablesAppTableIdResponse {
    /**
     * Constructs a new <code>PutDataTablesAppTableIdResponse</code>.
     * PutDataTablesAppTableIdResponse
     * @alias module:model/PutDataTablesAppTableIdResponse
     */
    constructor() { 
        
        PutDataTablesAppTableIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutDataTablesAppTableIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutDataTablesAppTableIdResponse} obj Optional instance to populate.
     * @return {module:model/PutDataTablesAppTableIdResponse} The populated <code>PutDataTablesAppTableIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutDataTablesAppTableIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutDataTablesAppTableIdResponseChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutDataTablesAppTableIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutDataTablesAppTableIdResponseChanges} changes
 */
PutDataTablesAppTableIdResponse.prototype['changes'] = undefined;






export default PutDataTablesAppTableIdResponse;

