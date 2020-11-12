

import ApiClient from '../ApiClient';
import PutTaxesComponentsChanges from './PutTaxesComponentsChanges';

/**
 * The PutTaxesComponentsTaxComponentIdResponse model module.
 * @module model/PutTaxesComponentsTaxComponentIdResponse
 * @version 1.0
 */
class PutTaxesComponentsTaxComponentIdResponse {
    /**
     * Constructs a new <code>PutTaxesComponentsTaxComponentIdResponse</code>.
     * PutTaxesComponentsTaxComponentIdResponse
     * @alias module:model/PutTaxesComponentsTaxComponentIdResponse
     */
    constructor() { 
        
        PutTaxesComponentsTaxComponentIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutTaxesComponentsTaxComponentIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutTaxesComponentsTaxComponentIdResponse} obj Optional instance to populate.
     * @return {module:model/PutTaxesComponentsTaxComponentIdResponse} The populated <code>PutTaxesComponentsTaxComponentIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTaxesComponentsTaxComponentIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutTaxesComponentsChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutTaxesComponentsTaxComponentIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutTaxesComponentsChanges} changes
 */
PutTaxesComponentsTaxComponentIdResponse.prototype['changes'] = undefined;






export default PutTaxesComponentsTaxComponentIdResponse;

