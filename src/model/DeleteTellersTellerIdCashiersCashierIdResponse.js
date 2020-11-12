

import ApiClient from '../ApiClient';

/**
 * The DeleteTellersTellerIdCashiersCashierIdResponse model module.
 * @module model/DeleteTellersTellerIdCashiersCashierIdResponse
 * @version 1.0
 */
class DeleteTellersTellerIdCashiersCashierIdResponse {
    /**
     * Constructs a new <code>DeleteTellersTellerIdCashiersCashierIdResponse</code>.
     * DeleteTellersTellerIdCashiersCashierIdResponse
     * @alias module:model/DeleteTellersTellerIdCashiersCashierIdResponse
     */
    constructor() { 
        
        DeleteTellersTellerIdCashiersCashierIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteTellersTellerIdCashiersCashierIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTellersTellerIdCashiersCashierIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteTellersTellerIdCashiersCashierIdResponse} The populated <code>DeleteTellersTellerIdCashiersCashierIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteTellersTellerIdCashiersCashierIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
DeleteTellersTellerIdCashiersCashierIdResponse.prototype['resourceId'] = undefined;






export default DeleteTellersTellerIdCashiersCashierIdResponse;

