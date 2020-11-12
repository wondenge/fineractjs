

import ApiClient from '../ApiClient';
import PutTellersTellerIdCashiersCashierIdResponseChanges from './PutTellersTellerIdCashiersCashierIdResponseChanges';

/**
 * The PutTellersTellerIdCashiersCashierIdResponse model module.
 * @module model/PutTellersTellerIdCashiersCashierIdResponse
 * @version 1.0
 */
class PutTellersTellerIdCashiersCashierIdResponse {
    /**
     * Constructs a new <code>PutTellersTellerIdCashiersCashierIdResponse</code>.
     * PutTellersTellerIdCashiersCashierIdResponse
     * @alias module:model/PutTellersTellerIdCashiersCashierIdResponse
     */
    constructor() { 
        
        PutTellersTellerIdCashiersCashierIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutTellersTellerIdCashiersCashierIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutTellersTellerIdCashiersCashierIdResponse} obj Optional instance to populate.
     * @return {module:model/PutTellersTellerIdCashiersCashierIdResponse} The populated <code>PutTellersTellerIdCashiersCashierIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTellersTellerIdCashiersCashierIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('subResourceId')) {
                obj['subResourceId'] = ApiClient.convertToType(data['subResourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutTellersTellerIdCashiersCashierIdResponseChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutTellersTellerIdCashiersCashierIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {Number} subResourceId
 */
PutTellersTellerIdCashiersCashierIdResponse.prototype['subResourceId'] = undefined;

/**
 * @member {module:model/PutTellersTellerIdCashiersCashierIdResponseChanges} changes
 */
PutTellersTellerIdCashiersCashierIdResponse.prototype['changes'] = undefined;






export default PutTellersTellerIdCashiersCashierIdResponse;

