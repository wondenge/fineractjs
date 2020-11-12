

import ApiClient from '../ApiClient';

/**
 * The PutTellersTellerIdCashiersCashierIdResponseChanges model module.
 * @module model/PutTellersTellerIdCashiersCashierIdResponseChanges
 * @version 1.0
 */
class PutTellersTellerIdCashiersCashierIdResponseChanges {
    /**
     * Constructs a new <code>PutTellersTellerIdCashiersCashierIdResponseChanges</code>.
     * @alias module:model/PutTellersTellerIdCashiersCashierIdResponseChanges
     */
    constructor() { 
        
        PutTellersTellerIdCashiersCashierIdResponseChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutTellersTellerIdCashiersCashierIdResponseChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutTellersTellerIdCashiersCashierIdResponseChanges} obj Optional instance to populate.
     * @return {module:model/PutTellersTellerIdCashiersCashierIdResponseChanges} The populated <code>PutTellersTellerIdCashiersCashierIdResponseChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTellersTellerIdCashiersCashierIdResponseChanges();

            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} endDate
 */
PutTellersTellerIdCashiersCashierIdResponseChanges.prototype['endDate'] = undefined;

/**
 * @member {String} description
 */
PutTellersTellerIdCashiersCashierIdResponseChanges.prototype['description'] = undefined;

/**
 * @member {String} locale
 */
PutTellersTellerIdCashiersCashierIdResponseChanges.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PutTellersTellerIdCashiersCashierIdResponseChanges.prototype['dateFormat'] = undefined;






export default PutTellersTellerIdCashiersCashierIdResponseChanges;

