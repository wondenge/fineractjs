

import ApiClient from '../ApiClient';
import IdDocument from './IdDocument';
import PostalAddress from './PostalAddress';
import SubjectName from './SubjectName';

/**
 * The InteropKycResponseData model module.
 * @module model/InteropKycResponseData
 * @version 1.0
 */
class InteropKycResponseData {
    /**
     * Constructs a new <code>InteropKycResponseData</code>.
     * @alias module:model/InteropKycResponseData
     */
    constructor() { 
        
        InteropKycResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InteropKycResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InteropKycResponseData} obj Optional instance to populate.
     * @return {module:model/InteropKycResponseData} The populated <code>InteropKycResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InteropKycResponseData();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('loanId')) {
                obj['loanId'] = ApiClient.convertToType(data['loanId'], 'Number');
            }
            if (data.hasOwnProperty('savingsId')) {
                obj['savingsId'] = ApiClient.convertToType(data['savingsId'], 'Number');
            }
            if (data.hasOwnProperty('subResourceId')) {
                obj['subResourceId'] = ApiClient.convertToType(data['subResourceId'], 'Number');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = ApiClient.convertToType(data['changes'], {'String': Object});
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('gsimId')) {
                obj['gsimId'] = ApiClient.convertToType(data['gsimId'], 'Number');
            }
            if (data.hasOwnProperty('glimId')) {
                obj['glimId'] = ApiClient.convertToType(data['glimId'], 'Number');
            }
            if (data.hasOwnProperty('rollbackTransaction')) {
                obj['rollbackTransaction'] = ApiClient.convertToType(data['rollbackTransaction'], 'Boolean');
            }
            if (data.hasOwnProperty('nationality')) {
                obj['nationality'] = ApiClient.convertToType(data['nationality'], 'String');
            }
            if (data.hasOwnProperty('dateOfBirth')) {
                obj['dateOfBirth'] = ApiClient.convertToType(data['dateOfBirth'], 'String');
            }
            if (data.hasOwnProperty('contactPhone')) {
                obj['contactPhone'] = ApiClient.convertToType(data['contactPhone'], 'String');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
            }
            if (data.hasOwnProperty('idDocument')) {
                obj['idDocument'] = ApiClient.convertToType(data['idDocument'], [IdDocument]);
            }
            if (data.hasOwnProperty('postalAddress')) {
                obj['postalAddress'] = PostalAddress.constructFromObject(data['postalAddress']);
            }
            if (data.hasOwnProperty('subjectName')) {
                obj['subjectName'] = SubjectName.constructFromObject(data['subjectName']);
            }
            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
            if (data.hasOwnProperty('birthCountry')) {
                obj['birthCountry'] = ApiClient.convertToType(data['birthCountry'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
InteropKycResponseData.prototype['officeId'] = undefined;

/**
 * @member {Number} groupId
 */
InteropKycResponseData.prototype['groupId'] = undefined;

/**
 * @member {Number} clientId
 */
InteropKycResponseData.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
InteropKycResponseData.prototype['loanId'] = undefined;

/**
 * @member {Number} savingsId
 */
InteropKycResponseData.prototype['savingsId'] = undefined;

/**
 * @member {Number} subResourceId
 */
InteropKycResponseData.prototype['subResourceId'] = undefined;

/**
 * @member {String} transactionId
 */
InteropKycResponseData.prototype['transactionId'] = undefined;

/**
 * @member {Object.<String, Object>} changes
 */
InteropKycResponseData.prototype['changes'] = undefined;

/**
 * @member {Number} productId
 */
InteropKycResponseData.prototype['productId'] = undefined;

/**
 * @member {Number} gsimId
 */
InteropKycResponseData.prototype['gsimId'] = undefined;

/**
 * @member {Number} glimId
 */
InteropKycResponseData.prototype['glimId'] = undefined;

/**
 * @member {Boolean} rollbackTransaction
 */
InteropKycResponseData.prototype['rollbackTransaction'] = undefined;

/**
 * @member {String} nationality
 */
InteropKycResponseData.prototype['nationality'] = undefined;

/**
 * @member {String} dateOfBirth
 */
InteropKycResponseData.prototype['dateOfBirth'] = undefined;

/**
 * @member {String} contactPhone
 */
InteropKycResponseData.prototype['contactPhone'] = undefined;

/**
 * @member {String} gender
 */
InteropKycResponseData.prototype['gender'] = undefined;

/**
 * @member {Array.<module:model/IdDocument>} idDocument
 */
InteropKycResponseData.prototype['idDocument'] = undefined;

/**
 * @member {module:model/PostalAddress} postalAddress
 */
InteropKycResponseData.prototype['postalAddress'] = undefined;

/**
 * @member {module:model/SubjectName} subjectName
 */
InteropKycResponseData.prototype['subjectName'] = undefined;

/**
 * @member {String} emailAddress
 */
InteropKycResponseData.prototype['emailAddress'] = undefined;

/**
 * @member {String} birthCountry
 */
InteropKycResponseData.prototype['birthCountry'] = undefined;






export default InteropKycResponseData;

